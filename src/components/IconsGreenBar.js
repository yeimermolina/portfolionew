import React from "react"
import Code from "./icons/Code"
import Phone from "./icons/Phone"
import Responsive from "./icons/Responsive"

const IconsGreenBar = props => (
  <section className="IconsGreenBar">
    <div className="IconsGreenBar__icon">
      <Code />
      <span>Web Development</span>
    </div>
    <div className="IconsGreenBar__icon">
      <Phone />
      <span>Mobile Development</span>
    </div>
    <div className="IconsGreenBar__icon">
      <Responsive />
      <span>Responsive Development</span>
    </div>
    <div className="IconsGreenBar__icon">
      <Responsive />
      <span>Responsive Development</span>
    </div>
  </section>
)

export default IconsGreenBar
