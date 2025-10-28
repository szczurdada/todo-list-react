import React from "react"
import styles from "./BoardColumn.module.scss"
import TaskStatus from "../TaskStatus/TaskStatus";
import InputContainer from "../InputContainer/InputContainer";
import Input from "../Input/Input";
import Button from "../Button/Button";
import TaskList from "../TaskList/TaskList";

import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {Todo} from "../../types/Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import {TODO_LS_KEY_POSTFIX} from "../../constants";
import {BoardColumnProps} from "./types";

export default function BoardColumn({name, searchInput}: BoardColumnProps) {
    const todoLsKey = `${name}_${TODO_LS_KEY_POSTFIX}`;
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem(todoLsKey);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(todoLsKey, JSON.stringify(todos));
    }, [todos, todoLsKey]);

    const addTodo = () => {
        if (input.trim() === '') return;
        if (input.length > 200) return;

        const newTodo = {
            id: uuidv4(),
            text: input,
            completed: false,
        }
        setTodos([...todos, newTodo]);
        setInput('');
    }

    const toggleTodo = (id: string) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTodo();
    }

    return (
        <div className={styles.boardColumn}>
            <h1 className={styles.heading}>{name}</h1>
            <TaskStatus todos={todos} />
            <InputContainer>
                <Input
                    value={input}
                    onChange={onInputChange}
                    onKeyDown={onInputKeyDown}
                    placeholder='Add your task...'
                />
                <Button onClick={addTodo}/>
            </InputContainer>
            <TaskList
                todos={todos}
                searchInput={searchInput}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </div>
    );
}
