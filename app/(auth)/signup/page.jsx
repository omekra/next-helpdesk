"use client";
import AuthForm from "../AuthForm";

export default function Signup() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("user sign up", email, password);
  };

  return (
    <main>
      <h2 className="text-center">Signup</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
