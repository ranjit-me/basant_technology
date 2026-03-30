function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span
        onClick={() => toggleComplete(index)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
