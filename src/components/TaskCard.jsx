import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ tache }) => {
  // Affiche un extrait de la description (100 caractères max)
  const extrait = tache.description.length > 100 ? tache.description.slice(0, 100) + "..." : tache.description;
  return (
    <Link to={`/task/${tache.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "#fafbfc",
        boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
      }}>
        <h3 style={{ margin: "0 0 0.5rem 0" }}>{tache.titre}</h3>
        <span style={{ fontSize: "0.9em", color: "#888" }}>{tache.statut}</span>
        <p style={{ margin: "0.5rem 0 0 0", color: "#444" }}>{extrait}</p>
      </div>
    </Link>
  );
};

export default TaskCard;
