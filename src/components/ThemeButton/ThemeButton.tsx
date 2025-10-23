import styles from "./ThemeButton.module.scss"
import {Sun, Moon} from 'lucide-react';
import {ThemeButtonProps} from "./types";

export default function ThemeButton({ isDark, onToggle }: ThemeButtonProps) {
    return (
            <button className={styles.themeButton} onClick={onToggle}>
                {isDark ? (
                    <Moon className={styles.icon} strokeWidth={1.75}/>
                ) : (
                    <Sun className={styles.icon} strokeWidth={1.75}/>
                )}
            </button>
    );
}