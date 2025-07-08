"use client";

import { useState } from "react";

type LoginFormProps = {
  onLogin: (data: { email: string; password: string }) => void;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    onLogin({ email, password });

    // Réinitialiser les champs
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Connexion</h2>

      {error && <p style={styles.error}>{error}</p>}

      <input
        type="email"
        placeholder="Adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        Se connecter
      </button>

      <p style={styles.link}>Mot de passe oublié ?</p>
      <p style={styles.link}>Pas encore inscrit ? Créez un compte</p>
    </form>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  form: {
    maxWidth: "400px",
    margin: "auto",
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.8rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "-0.5rem",
  },
  link: {
    textAlign: "center",
    color: "#0070f3",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
};
