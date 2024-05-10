import styles from "./Button.module.scss"
import sharedStyles from "../shared.module.scss"

export default ({ label, ...rest }) => {
    return (
        <div className={`${sharedStyles.formInput} ${styles.buttonWrapper}`}>
            <button className={styles.button} {...rest}>
                {label}
            </button>
        </div>
    )
}