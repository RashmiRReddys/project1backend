import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("VIEWER");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:8081/api/auth/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      alert("User added successfully!");
      navigate("/");
    } catch (error) {
      alert("Failed to add user.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="ADMIN">Admin</option>
          <option value="VIEWER">Viewer</option>
        </select>
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
