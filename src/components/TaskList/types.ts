import {Todo} from "../../types/Todo/Todo";

export interface TaskListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}