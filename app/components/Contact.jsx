"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let isValid = true;

    // Name validation
    if (!formData.name || formData.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Subject validation
    if (!formData.subject || formData.subject.trim().length < 5) {
      errors.subject = "Subject must be at least 5 characters.";
      isValid = false;
    }

    // Message validation
    if (!formData.message || formData.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters.";
      isValid = false;
    }

    setFieldErrors(errors);

    if (!isValid) {
      setSuccessMessage("");
      setFormError("Message not sent");
      return;
    }

    // Success
    setFormError("");
    setSuccessMessage("Message sent successfully!");

    console.log("Message Details:");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Subject:", formData.subject);
    console.log("Message:", formData.message);

    setTimeout(() => {
  setSuccessMessage("");
}, 5000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100 text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-sky-700">Contact Me</h2>
        <p className="text-gray-600">Get in touch with me</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {fieldErrors.name && <p className="text-red-600 text-sm mt-1">{fieldErrors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {fieldErrors.email && <p className="text-red-600 text-sm mt-1">{fieldErrors.email}</p>}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              autoComplete="off"
              className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fieldErrors.subject && <p className="text-red-600 text-sm mt-1">{fieldErrors.subject}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              autoComplete="off"
              className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {fieldErrors.message && <p className="text-red-600 text-sm mt-1">{fieldErrors.message}</p>}
          </div>

          {/* Form-level error or success */}
          {formError && <p className="text-red-600 font-semibold">{formError}</p>}
          {successMessage && <p className="text-green-600 font-semibold">{successMessage}</p>}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
