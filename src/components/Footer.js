import React from "react"
import MyName from "./MyName"
import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
import Instagram from "./icons/instagram"
import Twitter from "./icons/twitter"
import Button from "./Button"
import Input from "./Input"

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__inner">
      <div className="Footer__left">
        <MyName />
        <div className="Footer__social">
          <a>
            <Github />
          </a>
          <a>
            <Linkedin />
          </a>
          <a>
            <Instagram />
          </a>
          <a>
            <Twitter />
          </a>
        </div>
      </div>
      <div className="Footer__right">
        <div className="Footer__column Footer__column--small">
          <div className="Footer__box">
            <h4>CONTACT</h4>
            <p>I love new projects and met interesting people!</p>
          </div>
          <div>
            <div className="Footer__box Footer__box--small">
              <h4>CALL ME</h4>
              <p>+57 (314) 241 2450</p>
            </div>
            <div className="Footer__box Footer__box--small">
              <h4>EMAIL ME</h4>
              <p>yeimer.molina@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="Footer__column">
          <p className="Footer__text">
            Please, fill up the below form for inquiry
          </p>
          <form className="Form">
            <div className="Form__row Form--inline">
              <Input name="name" placeholder="Name" />
              <Input name="phone" placeholder="Phone" />
            </div>
            <div className="Form__row ">
              <Input name="subject" placeholder="Subject" />
            </div>
            <div className="Form__row">
              <Input name="subject" placeholder="Subject" rows="4" isTextArea />
            </div>
            <div className="Form__row">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
