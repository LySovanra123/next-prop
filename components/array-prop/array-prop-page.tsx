type TodoListProps = {
    todos: string[];
}

const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul>
            {
                todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))
            }
        </ul>
    )
}

export default TodoList