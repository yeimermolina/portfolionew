import React from "react"
import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
import Instagram from "./icons/instagram"
import Twitter from "./icons/twitter"
import Resume from "./icons/resume"

const SocialBar = () => (
  <div className="SocialBar">
    <a className="SocialBar__icon">
      <Github />
    </a>
    <a className="SocialBar__icon">
      <Linkedin />
    </a>
    <a className="SocialBar__icon">
      <Instagram />
    </a>
    <a className="SocialBar__icon">
      <Twitter />
    </a>
  </div>
)

export default SocialBar
