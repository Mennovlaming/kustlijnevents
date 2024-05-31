import './Contact.css'
import { Link } from 'react-router-dom';
import React, {  useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const mailLink = () => {
    const email = 'info@kustlijnevents.nl';
    const mailtoLink = `mailto:${email}`;
   
    window.open(mailtoLink, '_blank');
  };

 
    return (

      // <main className='content'>
        <section className='contact'>
          <h2>Kom in contact</h2>
          <p>Heb je vragen? Stuur een mail of bericht ons op de socials</p>
                <ul className='social'>
                  <li><a className="email" onClick={mailLink}><FontAwesomeIcon icon={faEnvelope} /> info@kustlijnevents.nl</a></li>
                  <li><p><FontAwesomeIcon icon={faPhone} /> 0612345679</p></li>
                  <li><p><FontAwesomeIcon icon={faHome} /> Robijn Reijntjesstraat 12</p></li>
                </ul>
                
                
                

          

               
        </section>
    // </main>
      
    );
}

export default Contact;