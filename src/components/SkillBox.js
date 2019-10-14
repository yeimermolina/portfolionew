import React from "react"
import Github from "./icons/github"

const SkillBox = () => (
  <div className="SkillBox">
    <div className="SkillBox__initial-state">
      <Github />
      <span>Github</span>
    </div>
    <div className="SkillBox__hover-state">70%</div>
  </div>
)

export default SkillBox
