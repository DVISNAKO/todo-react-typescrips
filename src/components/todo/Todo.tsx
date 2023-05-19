import { useState, useEffect, useRef } from 'react';
import { FC } from 'react'
import './Todo.css';
import {Itodo} from '../types/data';
import TodoList from '../TodoList';

const TodoApp: FC = () => {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Itodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const habdleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const hanleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
       if (e.key === 'Enter') addTodo();
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue('');
        }
    }
    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toogleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    useEffect(() => {
        if(inputRef.current){
          inputRef.current.focus();  
        }
    })

    return <div>
        <div>
            <input
                value={value}
                onChange={habdleChange}
                ref={inputRef}
                onKeyDown={hanleKeyDown}
                />
            <button onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos} removeTodo={removeTodo} toogleTodo={toogleTodo}
        />
    </div>
}

export default TodoApp;