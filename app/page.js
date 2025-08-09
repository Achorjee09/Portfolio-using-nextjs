import Image from "next/image";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About /> 
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
