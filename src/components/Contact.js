import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Get in touch-amico.svg";

export const Contact = () => {

    const forminitialDetails = {
        firstName: '',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    const [formDetails, setFormDetails] = useState(forminitialDetails)
    const [buttonText, setButtonText] = useState('Enviar')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }


    return (
        <section className="contact" id="connect"> 
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Contactame</h2>
                        <form action="mailto:svariumfoo@gmail.com" method="post" enctype="text/plain">
                            <Row >
                              {/*   <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Nombre" name="Nombre" ></input></Col>

                                <Col sm={6} className="px-1"> <input type="text" name="Apellido" placeholder="Apellido" 
                                ></input></Col>

                                <Col sm={6} className="px-1"> <input type="email"  placeholder="Email" name="Email"></input></Col>

                                <Col sm={6} className="px-1"> <input type="tel"  placeholder="Teléfono" name="Telefono" ></input></Col> */}

                                <Col>
                                    <textarea row="6"  placeholder="Mensaje" name="Mensaje"></textarea>
                                    <button type="submit"><span> {buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.sucess === 'false' ? "danger" : "sucess"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}