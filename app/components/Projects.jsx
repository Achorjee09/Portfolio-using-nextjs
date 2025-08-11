"use client";
import Image from "next/image";

const projects = [
  {
    title: "Super Shop Management System",
    description:
      "Built with C# and Windows Form. Includes employee management, product management, and admin panel.",
    image: "/images/project-1.jpg",
    link: "https://github.com/Achorjee09/Object-Oriented-Programming-2-Super-Shop-Management-System",
  },
  {
    title: "Document Management System",
    description:
      "ASP.NET Web API with 3-tier architecture, file uploads, tagging, and advanced search. Follows SOLID principles.",
    image: "/images/project-2.jpg",
    link: "https://github.com/Achorjee09/Advanced-Programming-with-.NET",
  },
  {
    title: "Travel & Hotel Booking System",
    description:
      "Web-based system using Oracle SQL, PL/SQL, HTML/CSS. Includes booking, rooms, transport, and activity modules.",
    image: "/images/project-3.jpg",
    link: "https://github.com/Achorjee09/Advanced-Database-Management-System-Project-GlobeTrekker-A-Travel-Agency-Management-System",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio site made using HTML, CSS, JavaScript with animations and downloadable CV support.",
    image: "/images/project-4.png",
    link: "https://achorjee09.github.io/Portfolio/",
  },
  {
    title: "Car Rushing Game",
    description:
      "Built with C++ and using OpenGL technology. Includes the playing car survive on the roads form any obstacles.",
    image: "/images/project-5.jpg",
    link: "https://github.com/Achorjee09/Computer-Graphics-Project-Car-Rushing-Game",
  },
  {
    title: "Library Management System",
    description:
      "Built with HTML, CSS, PHP. Includes User login and registration system, book borrowing system, book management.",
    image: "/images/project-6.jpg",
    link: "https://github.com/Achorjee09/Web-Technology-Project-Library-Management-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        <span className="text-sky-700 dark:text-indigo-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
