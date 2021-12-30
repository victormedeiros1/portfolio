import React from "react";

import { SkillsStyles } from "./styles";

function Skills() {
  return (
    <SkillsStyles id="skills" className="skills">
      <h3 className="skills--title">SKILLS</h3>
      <img
        className="skills--circle"
        alt="Skills Circle"
        src="./images/skills.svg"
      />
    </SkillsStyles>
  );
}

export default Skills;