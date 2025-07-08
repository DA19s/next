'use client';

import LoginForm from "@/app/components/LoginForm";

export default function LoginPage() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Tentative de login :", data);
    // Appel API ou logique de login ici
  };

  return (
    <main>
      <LoginForm onLogin={handleLogin} />
    </main>
  );
}
