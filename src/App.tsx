import { useRef } from "react";
import NavBar from "./NavBar/NavBar";
import Profile from "./Home/Profile";
import About from "./Home/About";
import Project from "./Home/Project";
import Experience from "./Home/Experience";
import Skill from "./Home/Skill";
import Contact from "./Home/Contact";
import "./App.css";

function App() {
  const aboutRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);
  const expRef = useRef<HTMLInputElement>(null);
  const skillRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const scrollTo = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <NavBar
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToProjects={() => scrollTo(projectRef)}
        scrollToExps={() => scrollTo(expRef)}
        scrollToSkills={() => scrollTo(skillRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      <Profile scrollToAbout={() => scrollTo(aboutRef)} />
      <About
        aboutRef={aboutRef}
        scrollToProjects={() => scrollTo(projectRef)}
      />
      <Project projectRef={projectRef} />
      <Experience expRef={expRef} />
      <Skill skillRef={skillRef} />
      <Contact contactRef={contactRef} />
    </>
  );
}

export default App;
