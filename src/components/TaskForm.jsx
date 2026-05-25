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
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 mb-8 border border-neutral-200 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Créer une nouvelle tâche</h3>
      
      <div className="mb-6">
        <label htmlFor="titre" className="block text-sm font-semibold text-neutral-700 mb-2">
          Titre de la tâche
        </label>
        <input
          id="titre"
          type="text"
          value={titre}
          onChange={e => setTitre(e.target.value)}
          placeholder="Ex: Finaliser le rapport"
          required
          className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-semibold text-neutral-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Décrivez les détails de votre tâche..."
          required
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="statut" className="block text-sm font-semibold text-neutral-700 mb-2">
          Statut initial
        </label>
        <select
          id="statut"
          value={statut}
          onChange={e => setStatut(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
        >
          <option value="A faire">À faire</option>
          <option value="En cours">En cours</option>
          <option value="Termine">Terminée</option>
        </select>
      </div>

      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        ➕ Ajouter la tâche
      </button>
    </form>
  );
};

export default TaskForm;
