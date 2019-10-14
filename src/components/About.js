import React from "react"
import SkillBox from "./SkillBox"

const About = () => (
  <div className="About">
    <div className="About__inner">
      <h2 className="About__title">ABOUT ME</h2>
      <p className="About__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="About__skills">
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
        <SkillBox />
      </div>
    </div>
  </div>
)

export default About
