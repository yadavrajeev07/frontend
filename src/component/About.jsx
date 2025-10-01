import React from 'react'

function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-6 py-16 text-center">
      
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-purple-800 mb-6">
        About This Website
      </h1>
      
      {/* Website Info */}
      <p className="text-lg text-gray-700 max-w-2xl mb-12 leading-relaxed">
        This website is all about <strong>photons</strong> and <strong>quantum physics</strong>.  
        It simplifies complex science into easy concepts, fun facts, and real-life 
        applications — showing how light powers our universe and technology.
      </p>


      
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">✨ Fun Facts About Photons</h2>
        <ul className="list-disc text-left md:text-center md:inline-block space-y-2 text-gray-700">
          <li>Photons have <strong>no mass</strong>, but they carry energy and momentum.</li>
          <li>Every color of light corresponds to photons of different energy.</li>
          <li>Without photons, life on Earth would not exist — they power photosynthesis.</li>
          <li>Fiber optic cables use photons to transmit internet data at light speed.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-100 text-center py-10">
        <h3 className="text-xl font-bold text-purple-800 mb-2">Want to Learn More?</h3>
        <p className="mb-4 text-gray-700">
          Dive deeper into the mysteries of light and quantum physics. The future of technology
          depends on understanding these building blocks of the universe!
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Photon"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-500"
        >
          Explore More
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Developer Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md mb-12">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">👨‍💻 Developer</h2>
        <p className="text-xl font-bold text-gray-900">Rajeev Kumar Yadav</p>
        <p className="text-gray-700">MCA Graduate | MERN Stack Developer</p>
        <p className="text-gray-600">📍 Noida Sector 62, India</p>
        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          I built this platform to share my interest in science, 
          physics, and technology — making knowledge more interactive 
          and easy for everyone to understand.
        </p>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rajeev Kumar Yadav. All rights reserved.
      </p>
    </div>
  )
}

export default About

