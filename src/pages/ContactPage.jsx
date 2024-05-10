import { useState } from "react"
import { TextInput, TextArea, Button } from "../components/Form"
import styles from "./page.module.scss"
import Alert from "../components/Alert"

export default () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [errors, setErrors] = useState({})

    const [submitted, setSubmitted] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()

        // Här kan vi posta datan med fetch till någon backend
        if (validateData()) {
            console.log(data)
            setSubmitted(true)
        }
    }

    const updateData = (key, value) => {
        const temp = {...errors}
        delete temp[key]

        setErrors(temp)

        setData({
            ...data,
            [key]: value
        })
    }

    const validateData = () => {
        const tempErrors = {}
        if (!data.name.length) {
            tempErrors.name = "Du måste fylla i ett namn"
        }
        if (!data.email.length) {
            tempErrors.email = "Du måste fylla i en e-post"
        }
        if (!data.message.length) {
            tempErrors.message = "Du måste fylla i ett meddelande"
        }

        if (Object.keys(tempErrors).length) {
            setErrors(tempErrors)
            return false
        }

        return true
    }

    return (
        <div className={styles.pageWrapper}>
            <h1>Kontakta mig</h1>
            {!submitted && (
                <>
                    <p>Vänligen skriv i era detaljer nedan för att komma i kontakt med mig:</p>
                    <form onSubmit={(e) => submitForm(e)}>
                        <TextInput 
                            label="Namn" 
                            name="name" 
                            value={data.name} 
                            onChange={(e) => updateData("name", e.target.value)}
                            error={errors?.name}
                        />
                        <TextInput 
                            label="E-post" 
                            name="email" 
                            value={data.email} 
                            onChange={(e) => updateData("email", e.target.value)} 
                            error={errors?.email}
                        />
                        <TextArea
                            label="Meddelande" 
                            name="message" 
                            value={data.message} 
                            onChange={(e) => updateData("message", e.target.value)} 
                            error={errors?.message}
                        />
                        <Button 
                            label="Skicka"
                            type="submit" 
                        />
                    </form>
                </>
            )}

            {submitted && (
                <Alert
                    headingText="Formulär ifyllt"
                    text="Tack! Jag hör av mig så snart som möjligt."
                />
            )}
        </div>
    )
}