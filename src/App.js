// src/App.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showTooltip, setShowTooltip] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const onSubmit = (data) => {
    setSubmittedName(data.name);
  };

  return (
    <div className="container">
      <h2 className="heading">Welcome Form</h2>

      {submittedName ? (
        <div className="welcome">🎉 Welcome, <strong>{submittedName}</strong>!</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-group">
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              className="input"
            />
            {showTooltip && (
              <div className="tooltip">Please enter your full name.</div>
            )}
            {errors.name && (
              <p className="error">{errors.name.message}</p>
            )}
          </div>

          <button type="submit" className="button">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
