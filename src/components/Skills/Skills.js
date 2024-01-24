import React from 'react'
import styles from "./Skills.module.css"

import cLogo from "../../assets/skills/C_Logo.png"
import css from "../../assets/skills/css.png"
import html from "../../assets/skills/html.png"
import java from "../../assets/skills/java.png"
import mongodb from "../../assets/skills/mongodb.png"
import mysql from "../../assets/skills/mysql.png"
import nodejs from "../../assets/skills/nodejs.png"
import python from "../../assets/skills/python.png"
import react from "../../assets/skills/react.png"

const Skills = () => {

    
    let data = [{title: "Java",
                src:java},

                {title: "Python",
                src: python},

                {title: "C",
                src: cLogo},

                {title: "MySQL",
                src: mysql},

                {title: "MongoDB",
                src: mongodb},
                
                {title: "HTML",
                src: html},

                {title:'CSS',
                src: css},

                {title: "React",
                src: react},

                {title: "NodeJS",
                src: nodejs}
                ];

  return (
    <section className={styles.section} id="skills">

        <div className={styles.skills}>

            <h1 className={styles.heading}>Skills</h1>

            <div className={styles.container}>
    
                    {data.map((data,id)=>{
                        return <div className={styles.box} key={id}>
                                <div className={styles.imageBox}><img className={styles.skillImage}src={data.src} alt={data.title}/></div>
                                <p className={styles.skillName}>{data.title}</p>
                        </div>
                        })}

            </div>

        </div>


        <div className={styles.experience}>

            {/* <h1 className={styles.heading}>Experience</h1> */}
            <div className={styles.experienceBox}></div>
            <div className={styles.experienceBox}></div>

        </div>


    </section>
  )
}

export default Skills
