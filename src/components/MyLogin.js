import React from "react";
import MyForm from "./MyForm";
import { useNavigate } from "react-router-dom";

const MyLogin = ({ onLogin }) => {
  const navigate = useNavigate();
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Entrer votre email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Ecrire votre mot de passe",
    },
  ];

  const handleLogin = (formData) => {
    const { email, password } = formData;
    const user = { email: "example@example.com", password: "password123" };
    localStorage.setItem("user", JSON.stringify(user));

    if (user && user.email === email && user.password === password) {
      onLogin(true);
      alert("Connexion réussie !");
    } else if (user && user.email !== email && user.password !== password) {
      alert("Email ou mot de passe incorrect");
    }
  };
  navigate("/MyRegister");

  function log(props) {
    return (
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-white font-bold mb-4">Se connecter</h1>
          <MyForm fields={fields} onSubmit={handleLogin} />
        </div>
      </div>
    );
  }
};
export default MyLogin;
