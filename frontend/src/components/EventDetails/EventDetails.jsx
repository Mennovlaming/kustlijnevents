import './EventDetails.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function EventDetails({ events }) {
    const { eventId } = useParams();
    const parsedEventId = parseInt(eventId, 10); // Maak expliciet een getal
    const event = events.find(event => event.id === parsedEventId);

    if (!event) {
        return <p>Evenement niet gevonden.</p>;
    }

    const imageUrl = `/${event.image[0]}`;

    return (
        <main className='content'>
            <section className='details'>
            <h2>{event.name}</h2>
            <p>{event.date} {event.time}</p>
            <img 
                src={imageUrl} 
                alt={event.name} 
            />
            <p>{event.description}</p>   
            
                <button><Link to={event.eventix}>tickets</Link></button>
                <hr />
                <div className='join'>
                <p >Join de whatsapp groep voor dit Event!</p>
                
                    <Link className='socials'to={events.whatsapplink}><img src="/images/socials/whatsapp.png" alt="" /></Link>
                    </div>
            </section>
        </main>
    );
}

export default EventDetails;
