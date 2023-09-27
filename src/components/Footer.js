import { Container, Row, Col } from "react-bootstrap";


import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/github-mark.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <br></br>
        <Row className="align-items-center">    
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={12} className="text-center text-sm-end mb-5">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/ezequiel-mu%C3%B1oz-b33b0225a/"><img src={navIcon1} alt=""/></a>
                <a href="https://www.facebook.com/svarium.foo/"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/tomatedespachurrado/?hl=es"><img src={navIcon3} alt=""/></a>
                <a href="https://github.com/Svarium"><img src={navIcon4} alt=""/></a>
                </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
