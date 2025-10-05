import React, { useEffect, useState } from "react";

function Welcome() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => setJoke(data))
      .catch(err => console.error("Error fetching joke:", err));
  }, []); // runs once on page load

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome</h1>
      

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        {joke ? (
          <>
            <p><strong>{joke.setup}</strong></p>
            <p>{joke.punchline}</p>
          </>
        ) : (
          <p>Loading joke...</p>
        )}
      </div>
    </div>
  );
}

export default Welcome;
