import {Todo} from "../../types/Todo/Todo";

export interface TaskItemProps {
    todo: Todo;
    onToggle: () => void;
    onDelete: () => void;
    searchInput: string;
}