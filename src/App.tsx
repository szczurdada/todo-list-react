import BoardColumn from "./components/BoardColumn/BoardColumn";
import styles from "./App.module.scss"
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";

export function TodoApp() {
    const theme = localStorage.getItem('theme');
    const [isDark, setDark] = useState(theme === 'dark');
    const [searchInput, setSearchInput] = useState('');
    const onToggleTheme = () => {setDark(!isDark)
        localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    }

    return (
        <div className={isDark ? styles.dark : ''}>
            <Header
                isDark={isDark}
                onToggle={onToggleTheme}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <div className={styles.container}>
                <BoardColumn name={'My tasks'} searchInput={searchInput}/>
                <BoardColumn name={'In progress'} searchInput={searchInput}/>
                <BoardColumn name={'In review'} searchInput={searchInput}/>
            </div>
        </div>
    );
}