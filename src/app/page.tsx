"use client";

import { useRef } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import About from "@/features/about/About";
import Contact from "@/features/contact/Contact";
import Experience from "@/features/experience/Experience";
import NavBar from "@/features/navbar/NavBar";
import Profile from "@/features/profile/Profile";

import projData from "../Data/expProjData.json";
import schoolData from "../Data/expSchoolData.json";
import workData from "../Data/expWorkData.json";

export default function Home() {
  const aboutRef = useRef<HTMLInputElement>(null);
  const expRef = useRef<HTMLInputElement>(null);
  const skillRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const scrollTo = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="bg-[#00020a] w-full flex flex-col items-center justify-center">
      <NavBar
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToExps={() => scrollTo(expRef)}
        scrollToSkills={() => scrollTo(skillRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      <div className="bg-[#00020a] flex flex-col w-[1000px] max-w-[80%] ">
        <Profile
          scrollToAbout={() => {
            throw new Error("Function not implemented.");
          }}
        />
        <About aboutRef={aboutRef} skillsRef={skillRef} />
        <Tabs
          ref={expRef}
          defaultValue="work"
          className="flex flex-col items-center justify-center scroll-mt-28"
        >
          <TabsList className="w-full">
            <TabsTrigger className="grow" value="work">
              Work
            </TabsTrigger>
            <TabsTrigger className="grow" value="project">
              Project
            </TabsTrigger>
            <TabsTrigger className="grow" value="education">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <Experience data={workData} />
          </TabsContent>
          <TabsContent value="project">
            <Experience data={projData} />
          </TabsContent>
          <TabsContent value="education">
            <Experience data={schoolData} />
          </TabsContent>
        </Tabs>
        <Contact contactRef={contactRef} />
        <div>Created by Ming yuan, Last updated Feb 2025</div>
      </div>
    </div>
  );
}
