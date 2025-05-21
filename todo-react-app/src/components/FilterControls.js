import React from "react";

function FilterControls({ filter, onChange }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <button onClick={() => onChange("all")} disabled={filter === "all"}>
        Всі
      </button>
      <button onClick={() => onChange("active")} disabled={filter === "active"}>
        Активні
      </button>
      <button
        onClick={() => onChange("completed")}
        disabled={filter === "completed"}
      >
        Виконані
      </button>
    </div>
  );
}

export default FilterControls;
