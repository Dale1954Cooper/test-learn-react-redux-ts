import React, {FC, useEffect} from 'react';

import {useTypedSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const TodoList: FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo);
    const {fetchTodo, setTodoPage} = useActions()

    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodo(page, limit);
    }, [page])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>
                    {todo.id} - {todo.title} {todo.completed ? 'TRUE' : 'FALSE'}
                </div>
            )}
            <p style={{display: 'flex', flexDirection: 'row'}}>
                {pages.map(p =>
                    <div
                        style={{display: 'flex'}}>
                        <div
                            onClick={() => setTodoPage(p)}
                            style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}>
                            {p}
                        </div>
                    </div>
                )}
            </p>
        </div>
    )
}

export default TodoList;