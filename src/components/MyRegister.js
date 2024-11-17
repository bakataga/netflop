import React, { useState } from "react";

const MyRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const fields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Entrer votre nom",
    },
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
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Retapez votre mot de passe",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Inscription réussie !");
  };

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl text-white font-bold mb-4">S'enregistrer</h1>
        <form onSubmit={handleRegister}>
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-white mb-2" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            S'enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyRegister;
