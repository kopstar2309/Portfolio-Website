import React from "react";
import "./skill.css";
const SkillsContent = (props) => {
  const { Icon, IconText } = props;
  return (
    <div className="skill-box">
      <img
        src={Icon}
        alt="figma-icon"
        style={{ height: "60px", width: "60px" }}
      />
      <div className="text">{IconText}</div>
    </div>
  );
};

export default SkillsContent;
