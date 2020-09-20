import React from "react"
import MyName from "./MyName"
import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
import Instagram from "./icons/instagram"
import Twitter from "./icons/twitter"
import Button from "./Button"
import Input from "./Input"

const Footer = () => (
  <footer id="contact" className="Footer">
    <div className="Footer__inner">
      <div className="Footer__left">
        <div>
          <MyName />
        </div>
        <div className="Footer__social">
          <a
            href="https://github.com/yeimermolina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/yeimermolina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/yeimergabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com/yeimergabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </div>
      </div>
      <div className="Footer__right">
        <div className="Footer__column Footer__column--small">
          <div className="Footer__box">
            <h4>CONTACT</h4>
            <p>Let me know about your project!</p>
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
        {/* <div className="Footer__column">
          <p className="Footer__text">
            Please, fill up the below form for inquiry
          </p>
          <form className="Form">
            <div className="Form__row Form--inline">
              <Input name="name" placeholder="Name" />
              <Input name="phone" placeholder="Phone" />
            </div>
            <div className="Form__row ">
              <Input name="email" placeholder="Email" />
            </div>
            <div className="Form__row">
              <Input
                name="subject"
                placeholder="Tell me about your project!"
                rows="4"
                isTextArea
              />
            </div>
            <div className="Form__row">
              <Button>Submit</Button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  </footer>
)

export default Footer
