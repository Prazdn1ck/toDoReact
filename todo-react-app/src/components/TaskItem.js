import React, { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, text);
    setEditing(false);
  };

  return (
    <li style={{ marginBottom: 10 }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleEdit}>Зберегти</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginLeft: 10,
            }}
          >
            {task.text}
          </span>
          <button onClick={() => setEditing(true)}>✏️</button>
        </>
      )}
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </li>
  );
}

export default TaskItem;
