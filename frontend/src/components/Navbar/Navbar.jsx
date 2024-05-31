import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ events }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Functie om de checkbox uit te schakelen wanneer er op een link wordt geklikt
    const handleLinkClick = () => {
        const checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = false;
        }
    };

    return (
        <>
        <img className='logo' src="./images/logos/horizontaal.png" alt="" />
            <label className="hamburger-menu">
                <input type="checkbox" />
            </label>
            
            <aside className="sidebar">
                
                <nav>
                    
                    <ul>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li className="dropdown">
                            <div className="dropdown-toggle" onClick={toggleDropdown}>
                                <a href='#' style={{ marginRight: '5px' }}>EVENTS</a>
                                <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} />
                            </div>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    {events.map(event => (
                                        <li key={event.id}>
                                            <Link to={`/event/${event.id}`} onClick={handleLinkClick}>{event.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li><Link to="https://shop.eventix.io/4ec12051-f4db-49e1-821b-2f696fdceed1/events" onClick={handleLinkClick}>Tickets</Link></li>
                        <li><Link to="/Overons" onClick={handleLinkClick}>Over ons</Link></li>
                        <li><Link to="/Busreis" onClick={handleLinkClick}>Busreis aanvragen</Link></li>
                        <li><Link to="/Contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Navbar;
