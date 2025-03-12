import React from "react";
import API from "./api"; // ✅ Ensure correct import path

function App() {
  React.useEffect(() => {
    API.get("/") // Example API call to test connection
      .then((response) => console.log("API Response:", response.data))
      .catch((error) => console.error("API Error:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to SDE Placement Preparation Platform</h1>
      <p>Your journey to cracking software engineering jobs starts here!</p>
    </div>
  );
}

export default App;
