import React,{useState} from 'react'
import styles from './Navbar.module.css'

import {getImageUrl} from "../../utils"
import menuIcon from "../../assets/nav/menuIcon.png"
import closeIcon from "../../assets/nav/closeIcon.png"


export const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
      <a className={styles.title} href='/'>Portfolio</a>

      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? closeIcon : menuIcon} onClick={()=>setMenuOpen(!menuOpen)} alt="menu button"/>

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
          <li><a href='#about'>About</a></li>

          <li><a href='#skills'>Skills</a></li>

          <li><a href='#projects'>Projects</a></li>

          <li><a href='#contact'>Contact me</a></li>
        </ul>

      </div>

    </nav>
  )
}


