import React from 'react'

import './HeroSection.modules.css'

import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation'

// icons
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiXdadevelopers } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import fotoGit from '../../assets/fotoGit.jpg'
import devImage from '../../assets/devImage.svg'

const HeroSection = () => {
  return (
    <>
    <ScrollAnimation />
        <div className="hero-section">
          <div className="hero-section_text hidden-elements">
            <h1>Thiago Berenger</h1>
            <h3>Desenvolvedor Front-end</h3>
            <div className="hero-section_icons">
              <a href="https://github.com/ThiagoBerenger" target='blank'>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/thiago-berenger/" target='blank'>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="hero-section_image">
            <img src={devImage} alt="Picture" />
            <div className="tech-container">
              <FaHtml5/>
              <FaCss3Alt/>
              <IoLogoJavascript/>
              <FaReact/>
              <FaBootstrap/>
              <DiJqueryLogo/>
            </div>
          </div>
        </div>
          <div className="about-container ">
              <div className="about-container_box hidden-elements">
              <img src={fotoGit} alt="Picture GitHub"/>
                <div className="about-container_text">
                  <h1>Sobre mim <SiXdadevelopers /></h1>
                  <p>Como desenvolvedor front-end, estou constantemente imerso no universo da programação. Minha jornada no desenvolvimento web começou com um fascínio pela interatividade proporcionada pelo JavaScript, e desde então, tenho mergulhado nas complexidades do React para construir aplicações dinâmicas e eficientes. Atualmente, curso Análise e Desenvolvimento de Sistemas, ao longo do último ano, tenho me dedicado ao aprendizado contínuo e à aplicação prática dos conceitos aprendidos. Com um olhar voltado para o futuro, estou determinado a expandir meu conjunto de habilidades para abraçar o mundo do desenvolvimento full stack, combinando minha paixão pela estética com a robustez do back-end. Estou ansioso para colaborar em projetos desafiadores e contribuir para a construção de soluções inovadoras.</p>
                </div>  
              </div>              
          </div>
    </>
  )
}

export default HeroSection