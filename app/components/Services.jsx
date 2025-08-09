"use client";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaPalette,
  FaCode,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Application",
      description:
        "Software development services we provide consist of designing, creating, testing, and deploying software applications. These services can be provided by individual or corporate requirement, and can range from simple applications to complex enterprise systems.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Our Web development services covers designing and building websites, web applications, and other web-based solutions. We can include everything from developing the website's layout and design to creating the code and functionality that runs behind the scenes.",
    },
    {
      icon: <FaPalette />,
      title: "IT System Integration",
      description:
        "Our IT system integration covers the scopes of connecting various software and hardware systems to work together as a unified system. This involves integrating multiple applications, databases, and servers into a single, seamless system.",
    },
    {
      icon: <FaCode />,
      title: "IT Support and Services",
      description:
        "Our total solution plan includes IT support and services comprising technical assistance and maintenance to your businesses and organizations for the technology infrastructure, software, and hardware.",
    },
    {
      icon: <FaSearch />,
      title: "AI Driven Development",
      description:
        "We include in AI-driven development by practicing artificial intelligence (AI) and machine learning (ML) technologies to enhance and automate various aspects of the software development lifecycle.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Our fine understanding and experience in Digital marketing technologies, such as the internet, social media, search engines, mobile devices, and other digital channels to promote products, services, and brands will place your business at a top order on the world wide web.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        <span className="text-sky-700 dark:text-indigo-400">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center transition-transform transform hover:-translate-y-2"
            >
              <div className="text-indigo-600 dark:text-indigo-400 text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
