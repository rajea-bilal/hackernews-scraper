import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container">
        <header className="flex justify-center items-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#D97757]">HackerNews Scraper</h1>
        <img src={logo} alt="HackerNews Logo" className="w-[5rem] border rounded-md"/>

        </header>
      </div>
    </nav>
  )
}

export default Navbar