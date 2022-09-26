import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from'../../img/humble.png'
import Card from '../Card/Card'
import Resume from './CV -Lucas Hess_DEV (1).pdf'
export default function Services() {
  return (
    <div className="services">
        <div className="serv-left">
            <span>Mis</span>
            <span>Servicios</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit voluptatem deleniti doloribus vitae distinctio pariatur nam repellendus consequuntur dolor.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing.
            </span>
            <a href={Resume} download>
            <button className="button s-button">Descargar CV</button>

            </a>
            <div className="blur s-blur1" style={{ background: '#ABF1FF94'}}></div>
        </div>
        <div className="serv-right">
            <div style={{left: '14rem'}}>

            <Card
            emoji = {HeartEmoji}
            heading = {'Diseño'}
            detail = {'Diseño hecho a tu medida y a tu gusto'}
            />
            </div>
            <div style={{top: '12rem', left: '-4rem'}}>

            <Card
            emoji = {Glasses}
            heading = {'Desarrollo'}
            detail = {'Me ocupo de que tu pagina funcione segun tus necesidades'}
            />
            </div>
            <div style={{top: '19rem', left: '12rem'}}>

            <Card
            emoji = {Humble}
            heading = {'Responsivo'}
            detail = {'Tu página será responsiva y se podra visualizar desde varios dispositivos'}
            />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}
