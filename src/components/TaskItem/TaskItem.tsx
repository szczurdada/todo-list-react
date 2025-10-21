import styles from "./TaskItem.module.scss";
import { Circle, Trash2, CircleCheck } from 'lucide-react';
import {TaskItemProps} from "./types";

export default function TaskItem({ todo, onToggle, onDelete }: TaskItemProps)  {
    return (
        <div className={`${styles.taskItem} ${todo.completed ? styles.completed : ''}`}>
            <div onClick={onToggle}>
                {todo.completed ? (
                    <CircleCheck className={`${styles.checkbox} ${styles.checked}`}/>
                ) : (
                    <Circle className={styles.checkbox}/>
                )}
            </div>
            <span>{todo.text}</span>
            <div onClick={onDelete}>
                <Trash2 className={styles.deleteButton}/>
            </div>
        </div>
    )
}

