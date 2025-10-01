import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-purple-800 mb-10">
        Contact Me
      </h1>

      {/* Info Section */}
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg mb-12 text-center">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">📩 Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          Feel free to reach out if you have questions about photons, quantum physics, 
          or this website. I'd love to connect with you!
        </p>
        <p className="text-gray-800 font-medium">👨‍💻 Rajeev Kumar Yadav</p>
        <p className="text-gray-600">📧 rajeevyadavraju7@gmail.com</p>
        <p className="text-gray-600">📱 +91 6390453460</p>
        <p className="text-gray-600">📍 Noida Sector 62, India</p>
      </div>

      {/* Contact Form */}
      <form className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Send a Message</h2>
        
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        
        <textarea 
          placeholder="Your Message" 
          rows="4" 
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        
        <button 
          type="submit" 
          className="w-full bg-purple-700 text-white font-medium py-3 rounded-lg hover:bg-purple-800 transition"
        >
          Send Message
        </button>
      </form>

      {/* Footer Note */}
      <p className="mt-10 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Rajeev Kumar Yadav. All rights reserved.
      </p>
    </div>
  )
}

export default Contact
