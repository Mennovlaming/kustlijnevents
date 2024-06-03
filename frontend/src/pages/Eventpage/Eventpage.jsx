import './Eventpage.css';
import { Link } from 'react-router-dom';

function Eventpage({ events }) {
    return (
        <>
        <section className='eventpage'>
            <h1>Events</h1>
            <p>Hieronder vind je al onze Events</p>
        </section>
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
                <section className='overons perfectie'>
                    <h1>Events</h1>
                    <p>Hieronder vind je al onze Events</p>
                    <button className='button1'>Vraag een busreis aan</button>
                </section>
                </>
    )
}

export default Eventpage;