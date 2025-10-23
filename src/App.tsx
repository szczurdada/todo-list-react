import BoardColumn from "./components/BoardColumn/BoardColumn";
import styles from "./App.module.scss"
import {useState} from "react";
import ThemeButton from "./components/ThemeButton/ThemeButton";

export function TodoApp() {
    const [isDark, setDark] = useState(false);

    return (
        <div className={`${styles.container} ${isDark ? styles.dark : ''}`}>
            <ThemeButton isDark={isDark} onToggle={() => setDark(!isDark)}/>
            <BoardColumn name={'My tasks'}/>
            <BoardColumn name={'In progress'}/>
            <BoardColumn name={'In review'}/>
        </div>
    );
}