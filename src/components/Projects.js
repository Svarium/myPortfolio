import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import { DetalleProjectAccordion } from "./DetalleProjectAccordion";

export const Projects = () => {

    const projects = [
        {
            title: "Encope",
            description: "Web Oficial del organismo",
            imgUrl: projImg1,
            link:"http://www.encope.gob.ar/"
          },
          {
            title: "Guarida del Lector",
            description: "E-commerce venta de Libros",
            imgUrl: projImg2,
            link:"https://guarida-del-lector-opxd.onrender.com"
          },
          {
            title: "18.Drinks",
            description: "E-commerce venta de bebidas",
            imgUrl: projImg3,
            link:"http://www.encope.gob.ar/"
          },   
          {
            title: "Proyecto Cine",
            description: "Sitio de reseña de películas",
            imgUrl: projImg4,
            link:"https://ismaelaxel.github.io/Proyecto_Cine.github.io/"
          },                   
    ]
const firstProjects = projects.slice(0,2);
const lastProjects = projects.slice(2,4)

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isvisible}) =>
                    <div className={isvisible ? "animated__animated animate_slideInUp" : ""}>
                    <h2> ⌨️Mis Projectos💻 </h2>
                    <p>Te invito a explorar mi sección de proyectos, donde puedes descubrir una selección de trabajos que reflejan mi enfoque serio y dedicado. Desde aplicaciones web hasta soluciones de software, cada proyecto cuenta una historia de habilidad y compromiso.</p>
                    <p><strong>
                    ¡Échale un vistazo para conocer más sobre mi trabajo y experiencia!
                    </strong>                 
                    </p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                   <Nav.Item>
                    <Nav.Link eventKey="first">1 - Proyectos</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link eventKey="second">2 - Proyectos </Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link eventKey="third"> 3 - Detalles</Nav.Link>
                   </Nav.Item>
                    </Nav>
                    <TabContent>
                        <Tab.Pane eventKey="first" >
                        <Row className="justify-content-center mx-auto">
                            {
                                           firstProjects.map((project, index) => {
                                    return (
                               <ProjectCard
                               key={index}
                               {...project}
                               />
                                    )
                                })
                            }
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"><Row className="justify-content-center mx-auto">
                            {
                                           lastProjects.map((project, index) => {
                                    return (
                               <ProjectCard
                               key={index}
                               {...project}
                               />
                                    )
                                })
                            }
                        </Row></Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <DetalleProjectAccordion/>
                        </Tab.Pane>
                    </TabContent>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}