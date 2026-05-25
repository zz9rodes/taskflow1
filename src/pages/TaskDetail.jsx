import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("taskflow_data")) || []);
  const tache = tasks.find(t => t.id === Number(id));
  const [editMode, setEditMode] = useState(false);
  const [titre, setTitre] = useState(tache ? tache.titre : "");
  const [description, setDescription] = useState(tache ? tache.description : "");
  const [statut, setStatut] = useState(tache ? tache.statut : "A faire");

  if (!tache) {
    return <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem", color: "#c00" }}>Tâche introuvable.</div>;
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const updatedTask = { ...tache, titre, description, statut };
    const newTasks = tasks.map(task => task.id === tache.id ? updatedTask : task);
    setTasks(newTasks);
    localStorage.setItem("taskflow_data", JSON.stringify(newTasks));
    setEditMode(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: "1rem" }}>
      <h2>Détail de la tâche</h2>
      <div style={{ background: "#f5f5f5", borderRadius: "8px", padding: "1rem" }}>
        <p><strong>ID :</strong> {tache.id}</p>
        {editMode ? (
          <form onSubmit={handleEdit}>
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
            <button type="submit" style={{ padding: "0.5rem 1.5rem", borderRadius: "4px", background: "#1976d2", color: "#fff", border: "none", fontWeight: "bold", marginRight: 8 }}>
              Enregistrer
            </button>
            <button type="button" onClick={() => setEditMode(false)} style={{ padding: "0.5rem 1.5rem", borderRadius: "4px", background: "#eee", color: "#333", border: "none", fontWeight: "bold" }}>
              Annuler
            </button>
          </form>
        ) : (
          <>
            <p><strong>Titre :</strong> {tache.titre}</p>
            <p><strong>Description :</strong> {tache.description}</p>
            <p><strong>Statut :</strong> {tache.statut}</p>
            <button onClick={() => setEditMode(true)} style={{ padding: "0.5rem 1.5rem", borderRadius: "4px", background: "#1976d2", color: "#fff", border: "none", fontWeight: "bold" }}>
              Modifier
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskDetail;
