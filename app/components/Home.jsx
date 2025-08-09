"use client";
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start">
          {/* Text Content */}
          <div className="lg:w-1/2 p-4 mt-16">
            <h3 className="text-xl mb-2">Hello, my name is</h3>
            <h1 className="text-4xl font-bold mb-3">
              <span className="text-cyan-400">Dip Achorjee Shokal</span>
            </h1>
            <h3 className="text-2xl mb-6">
              I'm a{" "}
              <span className="typing text-cyan-400 font-semibold">
                Full-Stack Web Developer
              </span>
            </h3>
            <p className="mb-6 max-w-md">
              I'm a web developer with extensive experience for over 3 years. My
              experience is to create and design website and many more.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=17R_rx-lNeTErfJABwaBnhM1xATpi9EDM"
              target="_blank"
              download
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded transition"
            >
              Download CV
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 p-4 flex justify-center mt-14 sm:mt-14 md:mt-14">
            <img
              src="/images/Dip.png"
              alt="Dip Achorjee Shokal"
              className="rounded-lg max-w-[350px] w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
