import React from "react";

export interface Task {
  id: number;
  name: string;
}

function TaskElement({ task, onDelete }: { task: Task; onDelete: () => void }) {
  return (
    <React.Fragment>
      <li>
        {task.name}
        <button onClick={onDelete}>Delete this</button>
      </li>
    </React.Fragment>
  );
}

export default TaskElement;
