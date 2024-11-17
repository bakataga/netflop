import React, { useState } from "react";

const MyForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (!formData[field.name]) {
        newErrors[field.name] = `${field.label} est requis`;
      } else if (
        field.type === "email" &&
        !/\S+@\S+\.\S+/.test(formData[field.name])
      ) {
        newErrors[field.name] = "Adresse email invalide";
      } else if (
        field.name === "confirm-password" &&
        formData["password"] !== formData["confirm-password"]
      ) {
        newErrors[field.name] = "Les mots de passe ne correspondent pas";
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="mb-2 font-bold text-slate-300">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              placeholder={field.placeholder}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              placeholder={field.placeholder}
            />
          )}
          {errors[field.name] && (
            <div className="text-red-500">{errors[field.name]}</div>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Soumettre
      </button>
    </form>
  );
};

export default MyForm;
