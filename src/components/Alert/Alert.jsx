import styles from "./Alert.module.scss"

export default ({ headingText, text }) => {
    return (
        <div className={styles.alert}>
            <h2 className={styles.alertHeading}>
                {headingText}
            </h2>
            <p className={styles.alertText}>
                {text}
            </p>
        </div>
    )
}