import { useRef } from "react";
import NavBar from "./NavBar/NavBar";
import Profile from "./Home/Profile";
import About from "./Home/About";
import "./App.css";

function App() {
  const aboutRef = useRef<HTMLInputElement>(null);
  const projectRef = useRef<HTMLInputElement>(null);
  const scrollTo = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <NavBar
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToProjects={() => scrollTo(projectRef)}
      />
      <Profile scrollToAbout={() => scrollTo(aboutRef)} />
      <About
        aboutRef={aboutRef}
        scrollToProjects={() => scrollTo(projectRef)}
      />
    </>
  );
}

export default App;
