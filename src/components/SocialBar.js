import React from "react"
import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
import Instagram from "./icons/instagram"
import Twitter from "./icons/twitter"

const SocialBar = () => (
  <div className="SocialBar">
    <a
      href="https://github.com/yeimermolina"
      target="_blank"
      rel="noopener noreferrer"
      className="SocialBar__icon"
    >
      <Github />
    </a>
    <a
      href="https://www.linkedin.com/in/yeimermolina/"
      target="_blank"
      rel="noopener noreferrer"
      className="SocialBar__icon"
    >
      <Linkedin />
    </a>
    <a
      href="https://www.instagram.com/yeimergabriel"
      target="_blank"
      rel="noopener noreferrer"
      className="SocialBar__icon"
    >
      <Instagram />
    </a>
    <a
      href="https://twitter.com/yeimergabriel"
      target="_blank"
      rel="noopener noreferrer"
      className="SocialBar__icon"
    >
      <Twitter />
    </a>
  </div>
)

export default SocialBar
