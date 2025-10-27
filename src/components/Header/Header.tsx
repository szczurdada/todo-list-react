import styles from "./Header.module.scss";
import ThemeButton from "../ThemeButton/ThemeButton";
import {HeaderProps} from "./types";
import InputContainer from "../InputContainer/InputContainer";
import Input from "../Input/Input";

export default function Header({isDark, onToggle, searchInput, setSearchInput}: HeaderProps) {
    return (
        <div className={styles.header}>
            <InputContainer>
                <Input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder='Find your task'
                />
            </InputContainer>
            <ThemeButton isDark={isDark} onToggle={onToggle} />
        </div>
    )
}