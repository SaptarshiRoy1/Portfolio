import React from 'react'
import ninjaImg from '../../assets/about/ninjaImg.png'
import cursorIcon from '../../assets/about/cursorIcon.png'
import serverIcon from '../../assets/about/serverIcon.png'
import uiIcon from '../../assets/about/uiIcon.png'
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container} id="about">
        
        <p className={styles.title}>About</p>

        <div className={styles.secondContainer}>

            <div className={styles.bottomBlur}/>

            <img src={ninjaImg} className={styles.ninjaImg} alt='loading irror'/>

            <div className={styles.thirdContainer}>

                <div className={styles.forthContainer}>

                    <img src={cursorIcon} alt='loading irror'/>
                    <div  className={styles.fifthContainer}>
                        <h4 className={styles.aboutTitle}>Programming Language</h4>
                        <p className={styles.aboutDes}>Java (OOPs), Python(numpy, pandas, matplotlib etc), C(DSA)</p>
                    </div>

                </div>
                <div className={styles.forthContainer}>

                    <img src={serverIcon} alt='loading irror'/>
                    <div className={styles.fifthContainer}>
                        <h4 className={styles.aboutTitle}>Web Development</h4>
                        <p className={styles.aboutDes}>HTML, CSS, JavaScript, Node.js, ReactJS</p>
                    </div>

                </div>
                <div className={styles.forthContainer}>

                    <img src={uiIcon} alt='loading irror'/>
                    <div className={styles.fifthContainer}>
                        <h4 className={styles.aboutTitle}>Database</h4>
                        <p className={styles.aboutDes}>SQL(MySQL Workbench), MongoDB(MongoDB compass) and Relational Database Models
</p>
                    </div>

                </div>
                
            </div>
            
        </div>

    </div>
  )
}

export default About
