import React, { useState } from "react";
import emailjs from "emailjs-com";
import { CONTACT } from "../constants";

const Contact = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Ensure the state key here matches the name in the email input
    message: "",
  });

  // Error state to handle validation error messages
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newError = {};
    let isValid = true;

    if (!formData.name) {
      newError.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      newError.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message) {
      newError.message = "Message is required.";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Don't submit if validation fails
    }

    emailjs
      .sendForm(
        "service_snxninc",
        "template_rvk0on9",
        e.target,
        "whFEwF8ww6R_Ce8oo"
      )
      .then(
        () => {
          console.log("Message sent successfully!");
          alert("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="border-b border-white pb-20">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="flex flex-col lg:flex-row gap-10 m-auto lg:w-1/2">
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-left text-sm font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // Ensure this matches the state key
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-md"
                required
              />
              {error.name && (
                <p className="text-red-500 text-sm">{error.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // Ensure this matches the state key
                value={formData.email} // This should match the 'email' state
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md"
                required
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-md"
                rows="5"
                required
              ></textarea>
              {error.message && (
                <p className="text-red-500 text-sm">{error.message}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
