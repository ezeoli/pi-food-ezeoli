import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import s from './Footer.module.css'


function Footer() {
  return (
    <footer>
      <div className={s.foot}>
      <span className={s.spanF}>2022 Envoy. All right reserved</span>
        <label className={s.spanF}>Team:</label>
        <a href="https://www.linkedin.com/in/ezequiel-olier-814767a7/" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaLinkedin /> Ezequiel Olier</ul></a>
        <a href="https://github.com/ezeoli" target="_blank" rel="noreferrer" className={s.links}><ul className={s.nos}><FaGithub/> Ezequiel Olier</ul></a>
      </div>
    </footer>
  )
}

export default Footer;