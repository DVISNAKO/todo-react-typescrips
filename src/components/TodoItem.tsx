import {FC} from 'react';
import {Itodo} from '../components/types/data';

interface TodoItem extends Itodo {
    removeTodo: (id: number) => void;
    toogleTodo: (id: number) => void;
};

const TodoItem: FC<TodoItem>= (props) => {
    const {id, title, complete, removeTodo, toogleTodo} = props;
    return (
        <div>
            <input 
            type="checkbox"
            checked={complete} onChange={() => toogleTodo(id)}/>
            {title}
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default TodoItem;