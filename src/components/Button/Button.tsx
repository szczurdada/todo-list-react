import styles from "./Button.module.scss";
import {Plus} from 'lucide-react';
import {ButtonProps} from "./types";

export default function Button({onClick}: ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick}>
            <Plus className={styles.buttonPlus}/>
        </button>
    );
}
