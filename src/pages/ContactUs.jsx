import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      console.log("Message sent:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        📬 Let's Connect
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Get in touch:</h3>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4 hover:bg-gray-100 transition-all hover:translate-x-1">
            <span className="text-3xl">📧</span>
            <div>
              <strong className="block text-gray-800">Email</strong>
              <p className="text-gray-600">mohammad11jj@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4 hover:bg-gray-100 transition-all hover:translate-x-1">
            <span className="text-3xl">📱</span>
            <div>
              <strong className="block text-gray-800">Phone</strong>
              <p className="text-gray-600">0913 033 5659</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4 hover:bg-gray-100 transition-all hover:translate-x-1">
            <span className="text-3xl">💬</span>
            <div>
              <strong className="block text-gray-800">Social</strong>
              <div className="flex gap-2 mt-1">
                <a href="https://github.com/mohammad11jj" className="text-purple-600 hover:text-purple-800">GitHub</a>
                <span>•</span>
                <a href="https://www.linkedin.com/in/jalalimohammad/" className="text-purple-600 hover:text-purple-800">LinkedIn</a>
                <span>•</span>
                <a href="https://t.me/mohammad11jj" className="text-purple-600 hover:text-purple-800">Telegram</a>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl text-center font-medium">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            Available for freelance work
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Send me a message:</h3>

          <input
            type="text"
            name="name"
            placeholder="Your name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all font-sans"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address *"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all font-sans"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all font-sans"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-all resize-none font-sans"
          ></textarea>

          <button 
            type="submit" 
            disabled={status === "sending"}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message ✨"}
          </button>

          {status === "success" && (
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-gray-800 p-3 rounded-xl text-center font-medium">
              ✅ Thanks! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;