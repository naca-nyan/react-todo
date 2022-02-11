import React from "react";

export interface Task {
  id: number;
  name: string;
}

function TaskElement({
  task,
  delete: onClick,
}: {
  task: Task;
  delete: () => void;
}) {
  return (
    <React.Fragment>
      <li>
        {task.name}
        <button onClick={onClick}>Delete this</button>
      </li>
    </React.Fragment>
  );
}

export default TaskElement;
