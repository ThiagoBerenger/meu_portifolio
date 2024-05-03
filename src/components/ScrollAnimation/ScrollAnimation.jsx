import React, { useEffect } from 'react'
import './ScrollAnimation.modules.css'

const ScrollAnimation = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden-elements');
        hiddenElements.forEach((el) => observer.observe(el));

        // Retorna uma função de limpeza para remover o observer quando o componente for desmontado
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    

  return (
    <></>
  )
}

export default ScrollAnimation