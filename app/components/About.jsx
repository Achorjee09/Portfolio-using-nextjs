"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-sky-700">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            I'm a full-stack web developer with a passion for creating beautiful and functional websites. Here's a bit more about me.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="md:w-1/3 w-full">
            <Image
              src="/images/about-image.png"
              alt="about-image"
              width={350}
              height={350}
              className="rounded-lg"
            />
          </div>

          {/* Intro Text */}
          <div className="md:w-2/3 w-full">
            <h3 className="text-2xl font-semibold mb-4">
              I'm Dip Achorjee Shokal, a Full-Stack Developer
            </h3>
            <p className="mb-4 text-gray-700">
              I specialize in building dynamic and responsive websites using technologies like React.js, Next.js, Laravel, ASP.NET, Node.js, and more. I enjoy solving problems and continuously learning new technologies to stay updated with industry trends.
            </p>
            <p className="mb-4 text-gray-700">
              I’ve built systems like a Document Management System, Super Shop Management System, E-Learning Platform, Food Court Management System, and more. I'm always eager to learn and build something impactful.
            </p>
            <a
              href="#contact"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-sky-700">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
            {[
              { name: "JavaScript", src: "/images/js.png" },
              { name: "HTML", src: "/images/html.png" },
              { name: "CSS", src: "/images/css.png" },
              { name: "Bootstrap", src: "/images/bootstrap.png" },
              { name: "React.js", src: "/images/react.png" },
              { name: "Next.js", src: "/images/next.png" },
              { name: "Tailwind CSS", src: "/images/tailwind.png" },
              { name: "ASP .NET", src: "/images/dotnet.png" },
              { name: "C#", src: "/images/csharp.png" },
              { name: "Python", src: "/images/python.png" },
            ].map((skill) => (
              <div
      key={skill.name}
      className="w-28 h-28 flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300"
    >
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="w-12 h-auto"
                />
                <p className="text-gray-700 text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-sky-700">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">BSc in CSE (2022–2025)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">American International University-Bangladesh</p>
                <p className="text-sm">Major: Software Engineering</p>
                <p className="text-sm">CGPA: 3.85</p>
              </div>
              <div>
                <h4 className="font-semibold">HSC (2020)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">New Govt. Degree College, Rajshahi</p>
                <p className="text-sm">Group: Science | GPA: 5.00</p>
              </div>
              <div>
                <h4 className="font-semibold">SSC (2018)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Naogaon K.D. Govt. High School</p>
                <p className="text-sm">Group: Science | GPA: 5.00</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-sky-700">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">Intern Software Engineer (2025–Present)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">TECH ANALYTICA LIMITED, Gulshan-1, Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
