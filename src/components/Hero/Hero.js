import React from 'react'
import myimg from '../../assets/hero/myimg.png'
import styles from "./Hero.module.css"
import CV_SR from "../../assets/My_CV/CV_SR.pdf"

const Hero = () => {
  return (
    <section className={styles.sectionContainer}>

    <div className={styles.divContent}>

        <h1 className={styles.title}>Hi, I'm Saptarshi</h1>
        
        <p className={styles.description}>I am a dedicated, organized, methodical and consistent individual.
         I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills
        </p>
        <div className={styles.buttonBox}>      
        <a className={styles.contact} href='mailto:srsr3778@gmail.com'>E-mail</a>
        <a className={styles.contact} href={CV_SR} download="CV_SR.pdf" >Download CV</a>
        </div>
    </div>

    <img className={styles.img} src={myimg} alt="My image"/>

    <div className={styles.topBlur}/> 
    <div className={styles.bottomBlur}/>

    </section>
  )
}

export default Hero
