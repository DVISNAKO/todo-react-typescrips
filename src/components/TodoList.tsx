import {FC} from 'react';
import TodoItem from './TodoItem';
import {Itodo} from './types/data';


interface ITodoListPtops {
    items: Itodo[];
    toogleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: FC<ITodoListPtops> = (props) => {
    const {items, toogleTodo, removeTodo} = props;
    return <div>
        {
            items.map(todo => (
            <TodoItem 
                key={todo.id} 
                toogleTodo={toogleTodo}
                removeTodo={removeTodo}
                {...todo}/>))
        }
    </div>
}

export default TodoList;