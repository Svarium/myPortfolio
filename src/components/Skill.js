import Carousel from "react-multi-carousel";
import {Row, Container, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx ">
                        <h2>Skills</h2>
                        <p >
                       
Soy un apasionado de la tecnología con una amplia gama de habilidades tanto técnicas como blandas. Tengo experiencia en áreas que van desde el armado y reparación de PC, hasta la administración de servidores y el desarrollo Full Stack, con un enfoque especial en Node.js. Además, me siento cómodo trabajando con tecnologías como Express.js, MongoDB, React.js y MySQL.

Mis habilidades blandas incluyen una fuerte ética de trabajo, capacidad para gestionar incidencias y ofrecer soporte técnico de alta calidad. También tengo experiencia en la resolución de problemas y la satisfacción del cliente es mi máxima prioridad.
                        </p>

                        {/* PODRIA ARMAR UN ARRAY PARA SETEAR EL ESTADO Y MAPEARLO PARA MOSTRAR TODOS LOS ELEMENTOS */}
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image"/>
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>css3</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>html5</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )

}