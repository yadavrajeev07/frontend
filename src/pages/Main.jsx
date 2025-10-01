import React from "react";
import photonImg from "../assests/photon.jpg"; // put an image in /src/assets/
import quantumImg from "../assests/quantum.jpg";

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-6 text-center">
        🌌 Photons & Quantum Physics
      </h1>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <img
          src={photonImg}
          alt="Photon illustration"
          className="rounded-2xl shadow-lg w-full md:w-1/2"
        />
        <p className="text-lg leading-relaxed text-gray-700 md:w-1/2">
          A <span className="font-bold text-purple-700">photon</span> is the
          fundamental particle of light – a quantum of electromagnetic energy
          emitted from the Sun and other sources. Photons carry energy across
          space, allowing life to exist on Earth. Unlike ordinary matter, they
          have <span className="italic">zero rest mass</span> and always move at
          the speed of light.
        </p>
      </div>

      {/* Quantum Physics Section */}
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        ⚛️ Quantum Physics & Photons
      </h2>
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-12">
        <img
          src={quantumImg}
          alt="Quantum physics visualization"
          className="rounded-2xl shadow-lg w-full md:w-1/2"
        />
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            In <span className="font-semibold">quantum physics</span>, photons
            are described as both particles and waves, showcasing the famous{" "}
            <span className="italic">wave-particle duality</span>. This means
            that light can behave like a continuous wave (interference,
            diffraction) and like discrete particles (photoelectric effect).
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Photons also play a crucial role in{" "}
            <span className="font-semibold">quantum mechanics</span>. They are
            involved in quantum entanglement, superposition, and are central to
            the development of quantum technologies such as{" "}
            <span className="text-purple-700 font-semibold">
              quantum computing and quantum communication
            </span>
            .
          </p>
        </div>
      </div>

      {/* Extra Info Section */}
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        🔬 Interesting Facts
      </h2>
      <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-2 mb-10">
        <li>Photons have no mass, yet they carry momentum and energy.</li>
        <li>
          Sunlight that reaches Earth is made of billions of photons traveling
          for about 8 minutes from the Sun.
        </li>
        <li>
          Einstein’s explanation of the photoelectric effect using photons won
          him the Nobel Prize in Physics (1921).
        </li>
        <li>
          Photons are essential in fiber optics, lasers, solar cells, and modern
          communication systems.
        </li>
      </ul>

      {/* Call to Action */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl shadow p-6 text-center">
        <h3 className="text-xl font-bold text-purple-700 mb-3">
          ✨ The Future of Light
        </h3>
        <p className="text-gray-700 text-lg">
          Understanding photons isn’t just about light – it’s about unlocking
          the secrets of the universe and building next-gen technologies. From
          quantum computing to space exploration, photons are at the heart of
          tomorrow’s discoveries.
        </p>
      </div>
    </div>
  );
}

export default About;
