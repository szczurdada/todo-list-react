import BoardColumn from "./components/BoardColumn/BoardColumn";
import styles from "./App.module.scss"

export function TodoApp() {
    return (
        <div className={styles.container}>
            <BoardColumn name={'My tasks'}/>
            <BoardColumn name={'In progress'}/>
            <BoardColumn name={'In review'}/>
        </div>
    );
}
