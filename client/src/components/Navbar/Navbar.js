import React, { Component } from 'react'
//import { MenuItems } from './MenuItems';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'
import './Navbar.css';
import {
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
} from 'reactstrap';
export class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        const size2 = {
            height: 130,
            width: 250,
            position: 'unset'
        };
        const size = {
            height: 200, width: 400
        };
        return (
            <nav className="NavbarItems">
                <img className="navlogo" style={size2} src={`${process.env.PUBLIC_URL}/assets/images/logoo.png`} onClick></img>
                <div className='menu-group'>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>

                    <Nav className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <Link to="/" className="nav-links">
                            <NavItem >Home</NavItem></Link>
                        <Link to="/offer" className="nav-links">
                            <NavItem >Make a post</NavItem></Link>
                        <Link to="/contact" className="nav-links">
                            <NavItem >Contact</NavItem></Link>
                        <Link to="/loginn" className="nav-links-mobile">
                            <NavItem >Sign in</NavItem></Link>
                    </Nav>
                    <Link className="sign-btn" to="/loginn">
                        <Button >Sign in</Button></Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;
