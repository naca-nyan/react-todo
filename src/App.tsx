import { ChangeEventHandler, useState } from "react";
import "./App.css";
import TaskElement, { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [id, setId] = useState(0);

  function addTask(t: Task) {
    setTasks([...tasks, t]);
  }
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTaskName(e.target.value);
  };
  const onClick = () => {
    const task: Task = {
      name: taskName,
      id: id,
    };
    setId(id + 1);
    addTask(task);
    // Clear task name
    setTaskName("");
  };
  const deleteTask = function (id: number): void {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  return (
    <div className="App">
      <input type="text" value={taskName} onChange={onChange} />
      <button onClick={onClick}>add</button>
      {tasks.map((t) => (
        <TaskElement key={t.id} task={t} onDelete={() => deleteTask(t.id)} />
      ))}
    </div>
  );
}

export default App;
