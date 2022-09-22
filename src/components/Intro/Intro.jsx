import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import BEj from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GalassesEmoji from '../../img/glassesimoji.png'

export default function Intro() {
  return (
    <div className='intro'>
        <div className='intro-left'>
            <div className='intro-name'>
                <span>Hola! Me llamo</span>
                <span>Lucas Hess</span>
                <span>Desarrollador Web FullStack JR</span>
            </div>
        <button className="button intro-btn">Contratame</button>
        <div className="intro-icons">
            <a href="https://www.linkedin.com/in/lucas-axel-hess/">
            <img src={Linkedin} alt="" />
            </a>
            <a href="https://github.com/LuH3ss">
            <img src={Github} alt="" />
            </a>
        </div>
        </div>
        <div className='intro-right'></div>
    </div>
  )
}
