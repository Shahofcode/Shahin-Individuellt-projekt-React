import Header from "../Header/Header"
import styles from "./AppWrapper.module.scss"
import darkModeAtom from "../../store/darkMode"
import { useAtom } from "jotai"

export default ({ children }) => {
    const [darkMode] = useAtom(darkModeAtom)

    return (
        <div className={`${styles.appWrapper} ${darkMode ? "dark" : ""}`}>
            <Header />
            {children}
        </div>
    )
}