import { ChangeEventHandler, useState } from "react";
import "./App.css";
import TaskElement, { Task } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [id, setId] = useState(0);

  function addTask(t: Task) {
    setId(id + 1);
    const tt = {
      ...t,
      id: id + 1,
    };
    setTasks([...tasks, tt]);
  }
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTaskName(e.target.value);
  };
  const onClick = () => {
    const task: Task = {
      name: taskName,
      id: 0,
    };
    setTaskName("");
    addTask(task);
  };
  const deleteTask = function (id: number): void {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  return (
    <div className="App">
      <input type="text" value={taskName} onChange={onChange} />
      <button onClick={onClick}>add</button>
      {tasks.map((t) => (
        <TaskElement key={t.id} task={t} delete={() => deleteTask(t.id)} />
      ))}
    </div>
  );
}

export default App;
