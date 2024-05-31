import './Events.css';
import { Link } from 'react-router-dom';

function Events( { events }) {
    

    return (
        
            <section className='container'>

                    
                    <ul className='events'>
                    {events.map(event => (
                        <li key={event.id}>
                            <img src={event.image[0]} alt="" />
                            <h3>{event.name}</h3>
                            <p>{event.date} {event.time}</p>
                            <div className='buttons'>
                                <button className='button2'>Tickets</button>
                                <button className='button1'><Link to={`/event/${event.id}`}>Zie event</Link></button>
                            </div>
                        </li>
                    ))}
                    </ul>
                </section>
       
    );
}

export default Events;
