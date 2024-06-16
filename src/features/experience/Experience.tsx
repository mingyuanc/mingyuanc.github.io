import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import be from "../../Data/skillDataBe.json";
import fe from "../../Data/skillDataFe.json";
import lang from "../../Data/skillDataLang.json";

import "react-vertical-timeline-component/style.min.css";

interface Exp {
  img: string;
  color: string;
  date: string;
  title: string;
  team: string;
  subtitle: string;
  desc: Array<string>;
  tech: Array<string> | undefined | null;
  link: string | undefined | null;
  companyLink: string | undefined | null;
  mockup: string | null;
}

interface ExpProps {
  data: Array<Exp>;
}

const masterlist = [...be, ...fe, ...lang];

function TechSkills({ values }: { values: string[] }) {
  const techSkills = masterlist.filter((i) => values.includes(i.name));
  return (
    <div className="mt-10 mb-4">
      <div className="flex flex-wrap">
        {techSkills.map((i) => (
          <TooltipProvider key={i.name} delayDuration={50}>
            <Tooltip>
              <TooltipTrigger>
                <div className="mr-2 mb-2">
                  <img
                    key={i.name}
                    className="w-12 h-12"
                    src={i.img}
                    alt={i.name}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="">
                <p>{i.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}

function Experience({ data }: ExpProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full" ref={ref}>
      <VerticalTimeline className="">
        {data.map((d) => (
          <VerticalTimelineElement
            visible={inView}
            key={new Date().getTime() * Math.random()}
            className="text-slate-300"
            date={d.date}
            contentStyle={{
              backgroundColor: "#00020a",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "none" }}
            icon={
              <button
                className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden ${
                  d.img.endsWith("nus.png") ? "p-1" : ""
                } ${d.companyLink !== undefined ? "" : "hover:cursor-default"}
                `}
                type="button"
              >
                <img src={d.img} alt="" />
              </button>
            }
            iconStyle={{ background: d.color }}
          >
            <div className="hover:cursor-default">
              <div className="">
                {d.link ? (
                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                    <h1 className="text-lg font-bold">{d.title}</h1>
                    <h3 className="">{d.subtitle}</h3>
                    <h3 className="mb-4">{d.team}</h3>
                  </a>
                ) : (
                  <>
                    <h1 className="text-lg font-bold">{d.title}</h1>
                    <h3 className="">{d.subtitle}</h3>
                    <h3 className="mb-4">{d.team}</h3>
                  </>
                )}

                <ul className="list-disc list-inside">
                  {d.desc.map((x) => (
                    <li className="mb-2" key={x}>
                      {x}
                    </li>
                  ))}
                </ul>
                {d.mockup && d.mockup !== null ? (
                  <a href={d.link!} target="_blank" rel="noopener noreferrer">
                    <img src={d.mockup} alt="mockup" className="max-h-96" />
                  </a>
                ) : null}
                <TechSkills values={d.tech || []} />
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
