
import React, { useEffect } from 'react'

function Home() {
  useEffect(() => {
    console.log('Home component rendered')
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-brand-primary">Marketing Design Hub</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Marketing Design Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your all-in-one platform for creating stunning marketing materials and designs.
          </p>
        </section>
        
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-brand-primary">Templates</h3>
            <p className="text-gray-600">Access professionally designed templates for all your marketing needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-brand-secondary">Design Tools</h3>
            <p className="text-gray-600">Powerful yet easy-to-use design tools to create engaging content.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-brand-accent">Analytics</h3>
            <p className="text-gray-600">Track the performance of your marketing materials with detailed analytics.</p>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2025 Marketing Design Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
