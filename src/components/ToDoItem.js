import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        return props.onchecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
