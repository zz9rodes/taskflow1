import React from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import useLocalStorage from "../hooks/useLocalStorage";

const Dashboard = () => {
  const [tasks, setTasks] = useLocalStorage("taskflow_data", []);

  const onAddTask = (nouvelleTache) => {
    setTasks(prev => [...prev, nouvelleTache]);
  };

  const completedCount = tasks.filter(t => t.statut === "Termine").length;
  const inProgressCount = tasks.filter(t => t.statut === "En cours").length;
  const todoCount = tasks.filter(t => t.statut === "A faire").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-5xl font-bold text-neutral-900 mb-3">Tableau de bord</h1>
          <p className="text-lg text-neutral-600">Gérez vos tâches efficacement</p>
        </div>

        {/* Stats Section */}
        {tasks.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-xl p-4 shadow-base border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">{todoCount}</div>
              <div className="text-sm font-medium text-neutral-600">À faire</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-base border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-warning-600 mb-1">{inProgressCount}</div>
              <div className="text-sm font-medium text-neutral-600">En cours</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-base border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-success-600 mb-1">{completedCount}</div>
              <div className="text-sm font-medium text-neutral-600">Terminées</div>
            </div>
          </div>
        )}

        {/* Form Section */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <TaskForm onAddTask={onAddTask} />
        </div>

        {/* Tasks List Section */}
        <div className="animate-in fade-in duration-500 delay-200">
          {tasks.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg text-neutral-600 font-medium mb-2">Aucune tâche pour le moment</p>
              <p className="text-neutral-500">Créez une nouvelle tâche pour commencer</p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Vos tâches ({tasks.length})</h2>
              <div className="space-y-3">
                {tasks.map((tache, index) => (
                  <div key={tache.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                    <TaskCard tache={tache} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
