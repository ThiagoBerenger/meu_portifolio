import React from 'react'
import './Footer.modules.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
          <div className="footer-social">
            <a href="https://github.com/ThiagoBerenger" target='blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/thiago-berenger/" target='blank'><FaLinkedin /></a>
          </div>
          <p>thberenger27@gmail.com</p>
      </div>
    </>
  )
}

export default Footer