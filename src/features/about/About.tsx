import type { RefObject } from "react";

import Skill from "@/features/skills/Skill";

interface AboutProps {
  aboutRef: RefObject<HTMLInputElement>;
  skillsRef: RefObject<HTMLInputElement>;
}

function About({ aboutRef, skillsRef }: AboutProps) {
  return (
    <div className="bg-[#00020a] scroll-mt-28" id="about" ref={aboutRef}>
      <h1 className="text-2xl font-bold mb-10">About</h1>
      <p className="text-justify text-lg text-slate-300 leading-relaxed">
        I am a passionate Computer Science student studying at the National
        University of Singapore (NUS). I am proficient in Typescript, Java, and
        Python, and enjoy developing web applications using React. Also, I have
        completed coursework and personal project to sate my curiosity as well
        as hone my technical abilities. When I&apos;m not immersed in coding or
        academics, you&apos;ll find me engaging in various sports activities
        like basketball and running , staying active and energised. If you share
        my passion for technology or think that I am a good fit, I would love to
        connect with you!
      </p>
      <Skill skillsRef={skillsRef} />
    </div>
  );
}

export default About;
