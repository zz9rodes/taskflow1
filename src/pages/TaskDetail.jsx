import React from "react";
import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  const tasks = JSON.parse(localStorage.getItem("taskflow_data")) || [];
  const tache = tasks.find(t => t.id === Number(id));

  if (!tache) {
    return <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", color: "#c00" }}>Tâche introuvable.</div>;
  }

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h2>Détail de la tâche</h2>
      <div style={{ background: "#f5f5f5", borderRadius: "8px", padding: "1rem" }}>
        <p><strong>ID :</strong> {tache.id}</p>
        <p><strong>Titre :</strong> {tache.titre}</p>
        <p><strong>Description :</strong> {tache.description}</p>
        <p><strong>Statut :</strong> {tache.statut}</p>
      </div>
    </div>
  );
};

export default TaskDetail;
