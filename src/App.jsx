import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import IncidentList from "./components/IncidentList";
import Welcome from "./components/Welcome";
import defaultIncidents from "./data/incidents";
import "./App.css";

const STORAGE_KEY = "incidents.v1";

function formatTimeSince(ms) {
  if (ms < 1000) return `${ms} ms`;
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hr`;
  const d = Math.floor(h / 24);
  return `${d} d`;
}

export default function App() {
  const [incidents, setIncidents] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultIncidents;
    } catch {
      return defaultIncidents;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(incidents));
  }, [incidents]);

  const lastCreated = incidents.length
    ? Math.max(...incidents.map((i) => i.createdAt || 0))
    : null;

  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const timeSinceLast = lastCreated ? formatTimeSince(now - lastCreated) : "—";

  // 🌙 Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app"}>
        <header className="app-header">
          <div className="left">Welcome Ms. Likhitha</div>
          <div className="center">
            Time since last incident: <strong>{timeSinceLast}</strong>
          </div>

          {/* Right side: dark mode button + nav */}
          <div className="right">
            <button
              className="btn btn-darkmode"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/incidents">Incidents</Link>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="/incidents"
              element={
                <IncidentList
                  incidents={incidents}
                  setIncidents={setIncidents}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
