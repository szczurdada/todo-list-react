import styles from "./Input.module.scss";
import React from "react";
import {InputProps} from "./types";

export default function Input({ value, onChange, onKeyDown, placeholder }: InputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={styles.input}
        />
    );
}