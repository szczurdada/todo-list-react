import styles from "./TaskItem.module.scss";
import { Circle, Trash2, CircleCheck } from 'lucide-react';
import {TaskItemProps} from "./types";

export default function TaskItem({ todo, onToggle, onDelete, searchInput}: TaskItemProps)  {
    const isHighlighted = searchInput !== "" && todo.text.includes(searchInput);

    return (
        <div className={`${styles.taskItem} ${todo.completed ? styles.completed : ''} ${isHighlighted ? styles.highlighted : ''}`}>
            <button className={styles.checkbox} onClick={onToggle}>
                {todo.completed ? (
                    <CircleCheck className={`${styles.checkbox} ${styles.checked} ${isHighlighted ? styles.highlighted : ''}`}/>
                ) : (
                    <Circle className={`${styles.checkbox} ${isHighlighted ? styles.highlighted : ''}`}/>
                )}
            </button>
            <span className={styles.span}>{todo.text}</span>
            <button className={styles.deleteButton} onClick={onDelete}>
                <Trash2 className={`${styles.deleteButton} ${isHighlighted ? styles.highlighted : ''}`}/>
            </button>
        </div>
    )
}

