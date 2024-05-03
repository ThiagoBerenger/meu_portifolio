import React, { useRef, useState } from 'react'
import './ProjectPage.modules.css'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

// ----

import { FaCode } from "react-icons/fa6";
import { FaHandPointLeft } from "react-icons/fa";

// images
import projectImage from '../../assets/certificadoFront.jpg'
import beecrowdExercices from '../../assets/projectsImage/beecrowdExercices.png'
import memoryGame from '../../assets/projectsImage/memoryGame.png'
import carProject from '../../assets/projectsImage/carProject.png'
import sJoseph from '../../assets/projectsImage/sjoseph.png'

// animation
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'


const ProjectPage = () => {
  return (
    <>
    <ScrollAnimation />
        <div className="projects-container">
            <div className="projects-text hidden-elements">
                <h1>Projetos <FaCode /> </h1>
                <p>Você poderá ver todos os projetos em meu GitHub.</p>
            </div>

            <div className="responsive-message_left hidden-elements">
                Arraste para esquerda <FaHandPointLeft/>
            </div>
        
            <div className="projects-item_container hidden-elements">              
            
            <h1>Arraste para esquerda <FaHandPointLeft/></h1>          

            <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: ['-20%', 0, -500],
          },
          next: {
            translate: ['100%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide>
            <div className="project-item">
                <img src={projectImage} alt="Projeto" />
                <div className="item-text">
                    <h2>Unipaz Website</h2>
                    <p>Site desenvolvido para a empresa UNIPAZ Serviços. O intuito do projeto é atualizar a identidade da empresa no ambiente web, com um site atrativo, que traga uma experiência agradável e prática ao usuário.</p>
                    <a href="https://github.com/lucasberenger/unipaz" target="blank">Leia a Documentação</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="project-item">
                <img src={sJoseph} alt="Wordpress site" />
                <div className="item-text">
                    <h2>S. Joseph Website</h2>
                    <p>Site da empresa S. Joseph, feito pela Hostinger em Wordpress.</p>
                    <a href="https://sjoseph.com.br/" target="blank">Acesse o Site</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="project-item">
                <img src={memoryGame} alt="Jogo da Memória" />
                <div className="item-text">
                    <h2>Jogo da Memória</h2>
                    <p>Jogo da memória desenvolvido em Javacript, com a temática da série da Amazon Prime "Invincible".</p>
                    <a href="https://github.com/ThiagoBerenger/berenger-invincible.github.io" target="blank">Leia a Documentação</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="project-item">
                <img src={carProject} alt="Projeto Carro" />
                <div className="item-text">
                    <h2>Carro em JavaScript</h2>
                    <p>Um projeto simples de carro usando a linguagem Javascript.</p>
                    <a href="https://github.com/ThiagoBerenger/carro-javascript" target="blank">Leia a Documentação</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="project-item">
                <img src={beecrowdExercices} alt="Beecrowd" />
                <div className="item-text">
                    <h2>Exercícios Beecrowd</h2>
                    <p>Algumas soluções de exercícios realizados para praticar a linguagem Javascript.</p>
                    <a href="https://github.com/ThiagoBerenger/beecrowdjs" target="blank">Leia a Documentação</a>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    </>
  )
}

export default ProjectPage