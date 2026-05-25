import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ tache }) => {
  const extrait = tache.description.length > 100 ? tache.description.slice(0, 100) + "..." : tache.description;
  
  const getStatusColor = (status) => {
    switch(status) {
      case "A faire":
        return "bg-neutral-100 text-neutral-700";
      case "En cours":
        return "bg-warning-100 text-warning-800";
      case "Termine":
        return "bg-success-100 text-success-800";
      default:
        return "bg-neutral-100 text-neutral-700";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "A faire":
        return "⭕";
      case "En cours":
        return "⏳";
      case "Termine":
        return "✅";
      default:
        return "•";
    }
  };

  return (
    <Link to={`/task/${tache.id}`} className="no-underline text-inherit">
      <div className="group bg-white rounded-xl border border-neutral-200 p-6 mb-4 shadow-base hover:shadow-lg transition-all duration-300 hover:border-primary-300 hover:-translate-y-1 cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors flex-1 line-clamp-2">
            {tache.titre}
          </h3>
          <span className="text-2xl ml-2">{getStatusIcon(tache.statut)}</span>
        </div>
        
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getStatusColor(tache.statut)}`}>
          {tache.statut}
        </span>
        
        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-2 group-hover:text-neutral-700 transition-colors">
          {extrait}
        </p>
      </div>
    </Link>
  );
};

export default TaskCard;
