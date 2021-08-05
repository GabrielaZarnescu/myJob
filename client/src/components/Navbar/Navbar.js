import React, { Component } from 'react'
//import { MenuItems } from './MenuItems';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom'
import './Navbar.css';
import{
    Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
export class Navbar extends Component {
    state = { clicked: false }
    handleClick=()=> {
        this.setState({clicked: !this.state.clicked})
    }
    
    render() {
        const size2 = {
            height: 130,
            width: 250
        } ;
        const size = {
            height:200, width:400
        } ; 
        return (
            <nav className="NavbarItems">
                <img classname="navbar-logo" style={size2} src={`${process.env.PUBLIC_URL}/assets/images/logoo.png`}></img>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <Nav className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/" className="nav-links">
                    <NavItem >Home</NavItem></Link>
                    <Link to="/offer" className="nav-links">
                    <NavItem >Make a post</NavItem></Link>
                    <Link to="/" className="nav-links">
                    <NavItem >Contact</NavItem></Link>
                    <Link to="/register" className="nav-links-mobile">
                    <NavItem >Sign in</NavItem></Link>
                </Nav>
                <Link to="/register">
                <Button>Sign in</Button></Link>
            </nav>
        )
    }
}

export default Navbar
