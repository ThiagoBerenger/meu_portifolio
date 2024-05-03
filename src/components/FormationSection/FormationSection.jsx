import React from 'react'
import './FormationSection.modules.css'

import certificadoFront from '../../assets/certificadoFront.jpg'
import rocketImage from '../../assets/rocketImage.svg'

import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

const FormationSection = () => {
  return (
    <>
    <ScrollAnimation />
        <div className="formation-container ">
            <div className="certificates_container hidden-elements">
                <h1>Certificados</h1>
                <div className="certificate-item_container">
                    <div className="certificate-item_box">
                        <div className="certificate-item">
                            <img src={certificadoFront} alt="Certificado Front-End" />
                            <p>Certificado de Conclusão do curso "Formação Front-end - HTML, CSS, JavaScript, React e +", do professor Matheus Batisti.</p>
                        </div>
                        {/* <div className="certificate-item">
                            <img src={certificadoFront} alt="Certificado Full-Stack" />
                            <p>Certificado de Conclusão do curso "Formação Front-end - HTML, CSS, JavaScript, React e +", do professor Matheus Batisti - Udemy</p>
                        </div> */}
                    </div>
                        <div className="certificate-image">
                            <img src={rocketImage} alt="Certificate" />
                        </div>
                </div>


            </div>   

        </div>
    </>
  )
}

export default FormationSection