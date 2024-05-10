import { useAtom } from "jotai"
import darkModeAtom from "../../store/darkMode"
import styles from "./DarkModeSwitch.module.scss"

export default () => {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    return (
        <div className={styles.darkModeSwitchWrapper}>
            <div className={styles.darkModeTrack}>
                <button
                    className={`${styles.darkModeSwitch} ${darkMode ? styles.on : styles.off}`}
                    onClick={() => setDarkMode(val => !val)} 
                />
                <div 
                    className={darkMode ? styles.darkModeOnText : styles.darkModeOffText} 
                    key={Number(darkMode)}
                >
                    {darkMode ? "MÖRK" : "LJUS"}
                </div>
            </div>
        </div>
    )
}