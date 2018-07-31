import React from 'react';
import { Link } from 'react-router-dom'
import Title from './title'

class Navbar extends React.Component {

    render() {
        return (
            <div className="container">
                <Title header="Admin Page" />
                <div id="myNav">
                    <nav className="navbar otherLetter">

                        <Link to='/'>Make Survey</Link>
                        <Link to='/surveys'>Survey List</Link>
                        <Link to='/clients'>View Clients</Link>

                    </nav>
                </div>
            </div>

        )
    }
}

export default Navbar;