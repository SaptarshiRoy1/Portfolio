import React from 'react'
import styles from "./Projects.module.css"
import projects from "../../projects.json"
import projectImg from "../../assets/projects/project.png"

const Projects = () => {
  return (
    <section className={styles.ProjectSection} id="projects">
        <h2 className={styles.Title}>Projects</h2>

        <div className={styles.container}>
            {projects.map((projects,id)=>{
                return(
                    <div className={styles.box} key={id}>

                        <img className={styles.projectImg} src={projectImg} alt="project image"/>
                        <h3 className={styles.projectTitle}>{projects.title}</h3>
                        <p className={styles.projectDescription}>{projects.description}</p>
                        <p className={styles.skills}>{projects.skills}</p>

                        <div className={styles.linkBox}>
                            <a className={styles.demolink} href={projects.demo} target='_blank'>Demo</a>
                            <a className={styles.demolink} href={projects.source} target='_blank'>Source</a>
                        </div>

                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Projects
