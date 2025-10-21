import styles from "./TaskList.module.scss";
import TaskItem from "../TaskItem/TaskItem"
import {TaskListProps} from "./types";

export default function TaskList({todos, onToggle, onDelete}: TaskListProps) {
    if (todos.length === 0) {
        return (
            <div className={styles.taskList}>
                No tasks yet. Add one to get started!
            </div>
        );
    } else {
        return (
            <div className={`${styles.taskList} ${todos.length > 0 ? styles.hasItems : ''}`}>
                {todos.map((todo) => (
                    <TaskItem
                        key={todo.id}
                        todo={todo}
                        onToggle={() => onToggle(todo.id)}
                        onDelete={() => onDelete(todo.id)}
                    />
                ))}
            </div>
        )
    }
}