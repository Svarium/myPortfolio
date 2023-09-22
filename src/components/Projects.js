import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ]



    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isvisible}) =>
                    <div className={isvisible ? "animated__animated animate_slideInUp" : ""}>
                    <h2>Projects</h2>
                    <p>y software, gestión de incidencias, administración de servidores, networking y seguridad en redes. En la actualidad, me encuentro concentrado en el desarrollo del sitio web oficial de la institución.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                   <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                   </Nav.Item>

                    </Nav>
                    <TabContent>
                        <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) => {
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
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </TabContent>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}