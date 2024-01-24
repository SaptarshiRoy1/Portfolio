import React from 'react'
import styles from "./Connect.module.css"
import emailIcon from "../../assets/contact/emailIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"

const Connect = () => {
  return (
    <footer className={styles.footer}>

    <div className={styles.container}>

        <h2 className={styles.title}>Connect</h2>
        <p className={styles.description}>Feel free to reach out!</p>
      
    </div>

    <ul className={styles.box}>

      <li className={styles.item}>
        <img className={styles.img} src={emailIcon} alt="e-mail icon"/>
        <a className={styles.linktext} href='mailto:srsr3778@gmail.com'>Email</a>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={linkedinIcon} alt="linkedIn icon"/>
        <a className={styles.linktext} href='https://www.linkedin.com/in/saptarshi-roy-682b81227/' target='_blank'>LinkedIn</a>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={githubIcon} alt="github icon"/>
        <a className={styles.linktext} href='https://github.com/' target='_blank'>GitHub</a>
      </li>

    </ul>

    </footer>
  )
}

export default Connect
