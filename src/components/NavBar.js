import { useState, useEffect} from "react";
import {Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/WhatsApp Image 2023-09-22 at 17.36.45.jpeg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github-mark.svg';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>      
         
        {/*   <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skill" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/ezequiel-mu%C3%B1oz-b33b0225a/"><img src={navIcon1} alt=""/></a>
                <a href="https://www.facebook.com/svarium.foo/"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/tomatedespachurrado/?hl=es"><img src={navIcon3} alt=""/></a>
                <a href="https://github.com/Svarium"><img src={navIcon4} alt=""/></a>
                </div>
                <a href="https://api.whatsapp.com/send?phone=541125203244&text=hola,%20¿qué%20tal%20estás?"><button className="vvd"><span>Contacta conmigo</span></button></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}