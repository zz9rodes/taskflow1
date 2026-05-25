import React from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import useLocalStorage from "../hooks/useLocalStorage";

const Dashboard = () => {
  const [tasks, setTasks] = useLocalStorage("taskflow_data", []);

  const onAddTask = (nouvelleTache) => {
    setTasks(prev => [...prev, nouvelleTache]);
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ textAlign: "center" }}>Tableau de bord</h2>
      <TaskForm onAddTask={onAddTask} />
      <div>
        {tasks.length === 0 ? (
          <p style={{ color: "#888", textAlign: "center" }}>Aucune tâche pour le moment.</p>
        ) : (
          tasks.map(tache => (
            <TaskCard key={tache.id} tache={tache} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
