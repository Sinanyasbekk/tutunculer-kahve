import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Styles/bizeulasin.css";
import Header from "./Header";
const BizeUlasin = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example: Email Sending via EmailJS or Backend API
    const response = await fetch("https://your-backend-api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", surname: "", email: "", topic: "", message: "" });
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <main>
      <Header />
      <div className="contact-us-container">
        <h2>Bize Ulaşın</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">İsim</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Soyisim</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta Adresiniz</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="topic">Konu</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default BizeUlasin;
