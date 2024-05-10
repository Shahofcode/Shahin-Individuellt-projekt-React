import styles from "../shared.module.scss"

export default ({ value, onChange, label, name, error }) => {
    return (
        <div className={`${styles.formInput} ${error?.length ? styles.formInputError : ''}`}>
            <label htmlFor={name}>{label}</label>
            <input name={name} type="text" value={value} onChange={onChange} />
            {Boolean(error?.length) && (
                <p className={styles.error}>
                    {error}
                </p>
            )}
        </div>
    )
}