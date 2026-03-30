import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;
