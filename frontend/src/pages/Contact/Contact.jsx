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

      <main className='content'>
        <section>
          <h2>Contact</h2>
                
                <a className="email" onClick={mailLink}><FontAwesomeIcon icon={faEnvelope} /> info@kustlijnevents.nl</a>
                <p><FontAwesomeIcon icon={faPhone} /> 0612345679</p>
                <p><FontAwesomeIcon icon={faHome} /> Robijn Reijntjesstraat 12</p>

                <hr />

                <p>Vind ons op social media!</p>
                <ul className='socialmedia'>
                  <li><Link to="https://chat.whatsapp.com/CUNgrOBQIIl7G7Jl2M0YGj"><img src="/images/socials/whatsapp.png" alt="" /></Link></li>
                  <li><Link to="https://www.instagram.com/kustlijnevents?igsh=MXZmYWJoeDlhNnhxeA=="><img src="/images/socials/instagram.png" alt="" /></Link></li>
                  <li><Link to="https://www.facebook.com/share/PRt57ejuzug7YAar/?mibextid=LQQJ4d"><img src="/images/socials/facebook.png" alt="" /></Link></li>
                </ul>
        </section>
    </main>
      
    );
}

export default Contact;