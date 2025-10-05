/*import React from "react";
import "../styles/IncidentCard.css";

const IncidentCard = ({ incident }) => {
  return (
    <div className="incident-card">
      <h3>{incident.id}</h3>
      <p><strong>Priority:</strong> {incident.priority}</p>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Status:</strong> {incident.status}</p>
    </div>
  );
};

export default IncidentCard;*/
/*import React, { useEffect, useState } from "react";
import "../styles/IncidentCard.css";

const IncidentCard = ({ incident, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ priority: "", severity: "", status: "" });

  useEffect(() => {
    setForm({ priority: incident.priority, severity: incident.severity, status: incident.status });
  }, [incident]);
  

  const handleChange = (e) => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  const handleSave = () => {
    onUpdate({ ...incident, ...form });
    setIsEditing(false);
  };

  const formatCreated = (t) => t ? new Date(t).toLocaleString() : "";

  return (
    <article className="incident-card" aria-label={`Incident ${incident.id}`}>
      <h3 className="incident-id">{incident.id}</h3>

      {!isEditing ? (
        <>
          <p><strong>Priority:</strong> {incident.priority}</p>
          <p><strong>Severity:</strong> {incident.severity}</p>
          <p><strong>Status:</strong> {incident.status}</p>
          <p className="created">Created: {formatCreated(incident.createdAt)}</p>

          <div className="card-actions">
            <button className="btn btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="btn btn-delete" onClick={() => onDelete(incident.id)}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <label className="field">Priority
            <select name="priority" value={form.priority} onChange={handleChange}>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </label>

          <label className="field">Severity
            <select name="severity" value={form.severity} onChange={handleChange}>
              <option>1 - Critical</option>
              <option>2 - High</option>
              <option>3 - Low</option>
            </select>
          </label>

          <label className="field">Status
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Open</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>
          </label>

          <div className="card-actions">
            <button className="btn btn-save" onClick={handleSave}>Save</button>
            <button className="btn btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      )}
    </article>
  );
};*/

//export default IncidentCard;

import React from "react";
import "../styles/IncidentCard.css";

const IncidentCard = ({ incident, onDelete }) => {
  const formatCreated = (t) => (t ? new Date(t).toLocaleString() : "");

  return (
    <article className="incident-card" aria-label={`Incident ${incident.id}`}>
      <h3 className="incident-id">{incident.id}</h3>

      <p><strong>Priority:</strong> {incident.priority}</p>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Status:</strong> {incident.status}</p>
      <p className="created">Created: {formatCreated(incident.createdAt)}</p>

      <div className="card-actions">
        <button className="btn btn-delete" onClick={() => onDelete(incident.id)}>Delete</button>
      </div>
    </article>
  );
};

export default IncidentCard;
