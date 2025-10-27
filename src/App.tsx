import BoardColumn from "./components/BoardColumn/BoardColumn";
import styles from "./App.module.scss"
import Header from "./components/Header/Header";
import {useState} from "react";

export function TodoApp() {
    const [isDark, setDark] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className={isDark ? styles.dark : ''}>
            <Header
                isDark={isDark}
                onToggle={() => setDark(!isDark)}
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