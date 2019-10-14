import React from "react"
import VerticalNav from "./VerticalNav"
import SocialBar from "./SocialBar"
import MyName from "./MyName"

const Hero = () => (
  <div className="Hero">
    <VerticalNav />
    <SocialBar />
    {/* <h1 className="Hero__title">
      YEIMER <br /> MOLINA
    </h1> */}
    <MyName isMain />
    <div className="Hero__note">
      <h2>SOFTWARE DEVELOPER</h2>
      <p>
        Turning ideas and projects into real digital products is my passion.
      </p>
    </div>
  </div>
)

export default Hero
