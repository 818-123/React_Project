import React from "react";

const Incident = ({ id, priority, severity, status }) => {
  return (
    <div style={styles.card}>
      <p><b>{id}</b></p>
      <p>{priority}</p>
      <p>{severity}</p>
      <p>{status}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#6EE7B7",
    borderRadius: "12px",
    padding: "15px",
    margin: "10px auto",
    width: "200px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
};

export default Incident;