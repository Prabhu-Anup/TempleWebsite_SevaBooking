import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add your form submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-red-800 mb-4">Contact Us</h1>
      <p className="mb-8 text-gray-700 text-center max-w-xl">
        Have questions, feedback, or want to get in touch with Shri Venkatraman Dev, Kumta? Fill out the form below and we’ll get back to you soon.
      </p>
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8">
        {submitted ? (
          <div className="text-green-700 font-semibold text-center">
            Thank you for contacting us! We will respond soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-800 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
      <div className="mt-8 text-gray-700 text-center">
        <div className="font-semibold">Temple Address:</div>
        Shri Venkatraman Dev, Car Street, Kumta, Karnataka<br />
        <span className="font-semibold">Phone:</span> +91-12345-67890<br />
        <span className="font-semibold">Email:</span> info@venkatramandevkumta.org
      </div>
    </div>
  );
};

export default Contact;