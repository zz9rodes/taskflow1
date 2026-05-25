import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("A faire");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvelleTache = {
      id: Date.now(),
      titre,
      description,
      statut
    };
    onAddTask(nouvelleTache);
    setTitre("");
    setDescription("");
    setStatut("A faire");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", background: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="titre">Titre</label><br />
        <input
          id="titre"
          type="text"
          value={titre}
          onChange={e => setTitre(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="description">Description</label><br />
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          rows={3}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="statut">Statut</label><br />
        <select
          id="statut"
          value={statut}
          onChange={e => setStatut(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="A faire">A faire</option>
          <option value="En cours">En cours</option>
          <option value="Termine">Termine</option>
        </select>
      </div>
      <button type="submit" style={{ padding: "0.5rem 1.5rem", borderRadius: "4px", background: "#1976d2", color: "#fff", border: "none", fontWeight: "bold" }}>
        Ajouter la tâche
      </button>
    </form>
  );
};

export default TaskForm;
