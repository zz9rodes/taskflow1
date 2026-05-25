import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tasks = JSON.parse(localStorage.getItem("taskflow_data")) || [];
  const tache = tasks.find(t => t.id === Number(id));

  const getStatusColor = (status) => {
    switch(status) {
      case "A faire":
        return "bg-neutral-100 text-neutral-800";
      case "En cours":
        return "bg-warning-100 text-warning-800";
      case "Termine":
        return "bg-success-100 text-success-800";
      default:
        return "bg-neutral-100 text-neutral-800";
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

  if (!tache) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-2xl font-bold text-neutral-900 mb-2">Tâche introuvable</p>
            <p className="text-neutral-600 mb-8">La tâche que vous recherchez n&apos;existe pas.</p>
            <button
              onClick={() => navigate("/")}
              className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-8 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              ← Retour au tableau de bord
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
        >
          ← Retour
        </button>

        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-white">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-4xl font-bold break-words flex-1">{tache.titre}</h1>
              <span className="text-4xl flex-shrink-0">{getStatusIcon(tache.statut)}</span>
            </div>
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white ${getStatusColor(tache.statut)}`}>
              {tache.statut}
            </span>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-8">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">Description</h3>
                <p className="text-lg text-neutral-700 leading-relaxed whitespace-pre-wrap">{tache.description}</p>
              </div>

              <div className="border-t border-neutral-200 pt-6 mt-8">
                <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-4">Détails</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-1">ID</p>
                    <p className="text-lg font-mono text-neutral-900 bg-neutral-100 px-3 py-2 rounded-lg">{tache.id}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-1">Statut</p>
                    <p className={`text-lg font-semibold px-3 py-2 rounded-lg inline-block ${getStatusColor(tache.statut)}`}>
                      {tache.statut}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
