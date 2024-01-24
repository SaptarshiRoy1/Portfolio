import styles from "./Contact.module.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

      // check how to use emailJs from from doc/google---https://www.emailjs.com/docs/examples/reactjs/

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7kjq9rb', 'template_t2btk1r', form.current, 'Rk3vWZJQBwNVXryFD')
        .then((result) => {
            alert("Massage sent successfully");
            window.location.reload(false)
        }, (error) => {
            alert("Failed: please try again");
        });
    }

  return (
    <div className={styles.Contactpage} >
      <div className={styles.contactBox} id="contact">
        <h1 className={styles.Title}>Contact</h1>

        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <ul className={styles.ui}>
                <li>
                    <input className={styles.name} type="text" name="name" placeholder="  Name" required/>
                </li>
                <li>
                    <input className={styles.email} type="email" name="email" placeholder="  Email" required/>
                </li>
                <li>
                    <input  className={styles.number} type="number" name="number" placeholder="  Number" required/>
                </li>
                <li >
                    <textarea className={styles.massage} name="message" placeholder="  Message" required/>
                </li>
                <li className={styles.btn}>
                    <button className={styles.Button} >Submit</button>
                </li>
            </ul>
        </form>

      </div>
    </div>
  )
}

export default Contact
