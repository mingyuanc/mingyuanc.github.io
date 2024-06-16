import type { RefObject } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import be from "../../Data/skillDataBe.json";
import fe from "../../Data/skillDataFe.json";
import lang from "../../Data/skillDataLang.json";
import styles from "./Skill.module.css";

interface SkillsProps {
  skillsRef: RefObject<HTMLInputElement>;
}

function Skill({ skillsRef }: SkillsProps) {
  return (
    <div className="mt-10 mb-20 scroll-mt-28" id="skill" ref={skillsRef}>
      <h1 className="text-2xl font-bold mb-10">Skills</h1>
      <div className="">
        <div className="">
          <h1 className="text-xl font-bold mb-10">Front End</h1>
          <div className="">
            {fe.map((i) => (
              <TooltipProvider key={i.img} delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger>
                    <div key={i.img} className={styles.tech}>
                      <img
                        key={i.name}
                        className={styles.techImg}
                        src={i.img}
                        alt={i.name}
                        id={i.name}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{i.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-bold mb-10">Back End</h1>
          <div className="">
            {be.map((i) => (
              <TooltipProvider key={i.img} delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className={styles.tech}>
                      <img
                        key={i.name}
                        className={styles.techImg}
                        src={i.img}
                        alt={i.name}
                        id={i.name}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{i.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl font-bold mb-10">Languages</h1>
          <div className="">
            {lang.map((i) => (
              <TooltipProvider key={i.img} delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className={styles.tech}>
                      <img
                        key={i.name}
                        className={styles.techImg}
                        src={i.img}
                        alt={i.name}
                        id={i.name}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{i.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
