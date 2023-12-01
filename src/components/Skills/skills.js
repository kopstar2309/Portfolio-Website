import React from "react";
import SkillsContent from "./SkillsContent";
import "./skill.css";
import FigmaIcon from "../../images/figma.svg";
import Marquee from "react-fast-marquee";
const SkillsContentData = [
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
  { title: "Figma", icon: FigmaIcon },
];
function Skills() {
  return (
    <div className="skill-section">
      <h1 className="skill-heading">Skills</h1>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        <div className="skill-content-wrapper">
          {SkillsContentData.map((item, index) => (
            <SkillsContent key={index} Icon={item.icon} IconText={item.title} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Skills;
