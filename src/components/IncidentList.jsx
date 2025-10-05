import React, { useState } from "react";
import IncidentCard from "./IncidentCard";
import "../styles/IncidentCard.css";

const IncidentList = ({ incidents, setIncidents }) => {
  const [newIncident, setNewIncident] = useState({
    id: "",
    priority: "Medium",
    severity: "3 - Low",
    status: "Open",
  });

  const addIncident = (e) => {
    e.preventDefault();
    if (!newIncident.id.trim()) return;
    const item = { ...newIncident, createdAt: Date.now() };
    setIncidents(prev => [item, ...prev]);
    setNewIncident({ id: "", priority: "Medium", severity: "3 - Low", status: "Open" });
  };

  const deleteIncident = (id) => setIncidents(prev => prev.filter(i => i.id !== id));
  const updateIncident = (updated) => setIncidents(prev => prev.map(i => i.id === updated.id ? updated : i));

  return (
    <section className="incident-page" style={{ padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Incident List</h2>

      <form className="add-form" onSubmit={addIncident} style={{ justifyContent: "center", display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        <input
          placeholder="Incident ID (e.g. INC-12345)"
          value={newIncident.id}
          onChange={(e) => setNewIncident({ ...newIncident, id: e.target.value })}
          required
        />
        <select value={newIncident.priority} onChange={(e) => setNewIncident({ ...newIncident, priority: e.target.value })}>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <select value={newIncident.severity} onChange={(e) => setNewIncident({ ...newIncident, severity: e.target.value })}>
          <option>1 - Critical</option>
          <option>2 - High</option>
          <option>3 - Low</option>
        </select>
        <select value={newIncident.status} onChange={(e) => setNewIncident({ ...newIncident, status: e.target.value })}>
          <option>Open</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>
        <button className="btn btn-add" type="submit">Add Incident</button>
      </form>

      <div className="incident-grid">
        {incidents.map(inc => (
          <IncidentCard key={inc.id} incident={inc} onDelete={deleteIncident} onUpdate={updateIncident} />
        ))}
      </div>
    </section>
  );
};

export default IncidentList;