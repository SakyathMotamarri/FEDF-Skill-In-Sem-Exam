import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>User List</h1>
      {loading && <p className="loading">Loading users...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;