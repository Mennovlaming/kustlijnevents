import './Home.css'


import Intro from '../../components/Intro/Intro';
import Landing from '../../components/Landing/Landing';
import Events from '../../components/Events/Events';
import Customers from '../../components/Customers/Customers';


function Home({ events }) {
    return (
        <>
            
        <Landing />
        
        <Intro />
        <h2 className='upcoming'>Aankomende Events</h2>
        <Events events={events}/>
        <Customers />
        
        </>
    );
}

export default Home;
