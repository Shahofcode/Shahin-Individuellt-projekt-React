import styles from "../shared.module.scss"

export default ({ value, onChange, label, name, error }) => {
    return (
        <div className={`${styles.formInput} ${error?.length ? styles.formInputError : ''}`}>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} type="text" onChange={onChange} value={value}  />
            {Boolean(error?.length) && (
                <p className={styles.error}>
                    {error}
                </p>
            )}
        </div>
    )
}