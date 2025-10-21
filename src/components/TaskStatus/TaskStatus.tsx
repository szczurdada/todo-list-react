import styles from "./TaskStatus.module.scss";
import {TaskStatusProps} from "./types";

export default function TaskStatus({ todos }: TaskStatusProps) {
    const completed = todos.filter((todo) => todo.completed).length;
    return (
        <p className={styles.taskStatus}>
            {completed} of {todos.length} completed
        </p>
    );
}