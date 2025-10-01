import React from 'react'

function Articles() {
  const articles = [
    {
      id: 1,
      title: "The Mystery of Photons",
      description: "Discover how photons, the smallest particles of light, shape our everyday life and advanced technologies.",
      date: "September 2025"
    },
    {
      id: 2,
      title: "Quantum Physics Simplified",
      description: "A beginner-friendly guide to understanding the weird and fascinating world of quantum mechanics.",
      date: "August 2025"
    },
    {
      id: 3,
      title: "Light and Energy",
      description: "Explore how light carries energy and why it's important in both science and daily life.",
      date: "July 2025"
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-16">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-10">
        Articles & Blogs
      </h1>

      {/* Article Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {articles.map(article => (
          <div 
            key={article.id} 
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{article.date}</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {article.description}
            </p>
            <button className="text-purple-600 font-medium hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles
