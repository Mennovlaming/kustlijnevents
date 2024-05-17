import './Home.css'
import { Link } from 'react-router-dom'



function Home({ events }) {
    return (
        <main>
            <div className='container'>
            <img className='logo' src="./images/logos/horizontaal.png" alt="" />

                {/* <p className='upcoming'>Aankomende Events:</p> */}
                <ul className='events'>
                {events.map(event => (
                    <li key={event.id}>
                        <img src={event.image[0]} alt="" />
                        <h2>{event.name}</h2>
                        <p>{event.date} {event.time}</p>
                        <div className='buttons'>
                            <button>Tickets</button>
                            <button><Link to={`/event/${event.id}`}>Zie event</Link></button>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </main>
    );
}

export default Home;
