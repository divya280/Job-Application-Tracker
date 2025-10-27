import React, { useState } from "react";
import { signup, login } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res;
      if (type === "signup") {
        res = await signup({ email, password });
        console.log("Signup response:", res);
      } else {
        res = await login({ email, password });
        console.log("Login response:", res);
      }
      // Navigate after successful response
      navigate("/dashboard");
    } catch (err) {
      console.error("API error:", err.response ? err.response.data : err);
      alert("Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-royalblue">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6">
          {type === "signup" ? "Sign Up" : "Login"}
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4 text-black"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4 text-black"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading
            ? type === "signup"
              ? "Creating..."
              : "Logging in..."
            : type === "signup"
            ? "Create Account"
            : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
