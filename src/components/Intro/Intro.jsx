import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import BEj from '../../img/boy.png'

import Crown from '../../img/crown.png'
import GalassesEmoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { useContext } from 'react'
import {themeContext} from '../../Context.js'

export default function Intro() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='intro'>
        <div className='intro-left'>
            <div className='intro-name'>
                <span
                style={
                  darkMode
                  ? {color: 'white'}
                  : {color: ''}
                }
                >Hola! Me llamo</span>
                <span>Lucas Hess</span>
                <span style={
                  darkMode
                  ? {color: 'white'}
                  : {color: ''}
                }
                >Desarrollador Web FullStack JR</span>
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
        <div className='intro-right'>
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={BEj} alt="" />
          <img src={GalassesEmoji} alt="" />
          <div style={{bottom: '0.2%', left: '1%'}}>
            <FloatingDiv 
            image={Crown} 
            txt1='web'
            txt2='Developer'
            />
          </div>
          <div className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width:'21rem',
            height: '11rem',
            left:'-9rem'

          }}></div>

        </div>
    </div>
  )
}
