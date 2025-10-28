import React from 'react';
import styles from "./InputContainer.module.scss"

export default function InputContainer({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.inputContainer}>
            {children}
        </div>
    );
}