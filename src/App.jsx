import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (field.firstName && field.lastName && field.email && field.phoneNumber) {
      setValidation(true);
    }

    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        {submitted && validation ? (
          <div className="success-message">Registration successful!</div>
        ) : null}

        <input
          id="first-name"
          className="form-input"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={field.firstName}
          onChange={(e) => setField({ ...field, firstName: e.target.value })}
        />
        {submitted && !field.firstName ? (
          <span className="error-message">Please enter your first name</span>
        ) : null}

        <input
          id="last-name"
          className="form-input"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={field.lastName}
          onChange={(e) => setField({ ...field, lastName: e.target.value })}
        />
        {submitted && !field.lastName ? (
          <span className="error-message">Please enter your last name</span>
        ) : null}

        <input
          id="email"
          className="form-input"
          type="text"
          placeholder="Email"
          name="email"
          value={field.email}
          onChange={(e) => setField({ ...field, email: e.target.value })}
        />
        {submitted && !field.email ? (
          <span className="error-message">Please enter your email</span>
        ) : null}

        <input
          id="phone-number"
          className="form-input"
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={field.phoneNumber}
          onChange={(e) => setField({ ...field, phoneNumber: e.target.value })}
        />
        {submitted && !field.phoneNumber ? (
          <span className="error-message">Please enter your phone number</span>
        ) : null}

        <button className="form-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
