import './Footer.css'

function Footer() {
  const mailLink = () => {
    const email = 'info@kustlijnevents.nl';
    const mailtoLink = `mailto:${email}`;
   
    window.open(mailtoLink, '_blank');
  };

    return (

        <footer>
          <ul>
            <li>Kustlijn Events</li>
            <li>Robijn Reijntjesstraat 12</li>
            <li>1785 EN Den Helder</li>
            <li>KVK Nummer: 86287540</li>
          </ul>
          <ul>
            <li >E-Mail Events: <a onClick={mailLink} href="#">info@kustlijnevents.nl</a></li>
            <li >E-Mail Tours: <a onClick={mailLink} href="#">tours@kustlijnevents.nl</a></li>
          </ul>
        </footer>
       
      
    );
}

export default Footer;
