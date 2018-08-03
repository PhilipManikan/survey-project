import React from 'react';
import { Link } from 'react-router-dom'
import Title from './title'
import Logo from '../images/tech_logo.png'

class Navbar extends React.Component {

    render() {
        return (
            <div className="container">
                <img id="Logo" src={Logo} />
                {/* <Title className="letter" header="Admin" /> */}
                <div id="myNav">
                    <nav className="navbar otherLetter">

                        <Link to='/'>Make Survey</Link>
                        <Link to='/surveys'>Survey List</Link>
                        <Link to='/data'> Data</Link>
                        <Link to='/clients'>View Clients</Link>

                    </nav>
                </div>
            </div>

        )
    }
}

export default Navbar;