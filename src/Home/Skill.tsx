import { RefObject } from "react";
import styles from "./Skill.module.css";

interface SkillProps {
  skillRef: RefObject<HTMLInputElement>;
}

function Skill({ skillRef }: SkillProps) {
  return <div>Hello world</div>;
}

export default Skill;
