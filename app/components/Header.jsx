"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const sectionEl = document.getElementById(section);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    setShowSidebar(false); // sidebar close after click
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-60 backdrop-blur-md z-50 flex items-center justify-between px-5 lg:px-20 shadow-lg">
      {/* Logo */}
      <div className="logo text-2xl font-bold text-white">Dip Achorjee Shokal</div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-5 text-white text-base font-medium">
          {["home", "about", "services", "projects", "contact"].map((section) => (
            <li
              key={section}
              onClick={() => handleNavClick(section)}
              className={`cursor-pointer capitalize transition duration-300 ${
                activeSection === section ? "text-cyan-400" : "hover:text-cyan-400"
              }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer z-50"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {showSidebar ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Sidebar */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-black p-6 shadow-lg border-r border-gray-700 md:hidden transition-transform duration-300 z-40
    ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
>
  {["home", "about", "services", "projects", "contact"].map((section) => (
    <div
      key={section}
      onClick={() => handleNavClick(section)}
      className={`py-4 w-full text-center bg-black text-white border-b border-gray-700 capitalize cursor-pointer ${
        activeSection === section
          ? "text-cyan-400"
          : "hover:text-cyan-400"
      }`}
    >
      {section}
    </div>
  ))}
</div>
    </header>
  );
};

export default Header;
