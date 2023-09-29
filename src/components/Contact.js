import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Get in touch-amico.svg";
import axios from "axios"; // Importa Axios
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos antes de enviar
  if (
    !formDetails.firstName ||
    !formDetails.lastName ||
    !formDetails.email ||
    !formDetails.phone ||
    !formDetails.message
  ) {
    // Mostrar una alerta de error si algún campo está vacío
    Swal.fire({
      icon: 'error',
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos antes de enviar el correo.',
    });
    return; // Evita que se envíe la solicitud si hay campos vacíos
  }
    setButtonText("Enviando...");
  
    try {
      const response = await axios.post("https://myportfolio-qs6t.onrender.com/send-email", formDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status !== 200) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const data = response.data;
      setStatus({
        message: data.message,
        success: true,
      });
  
      // Limpia los valores del formulario después de enviarlo
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      Swal.fire({
        title: 'Email enviado correctamente!',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.gifer.com/PYh.gif")
          left top
          no-repeat
        `
      })

    } catch (error) {
      console.error(error);
      setStatus({ message: "Hubo un error al enviar la solicitud.", success: false });
    }
  
    setButtonText("Enviar");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Contactame</h2>
            <form action="https://myportfolio-qs6t.onrender.com/send-email" method="POST" onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="firstName"
                    value={formDetails.firstName}
                    onChange={handleInputChange}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    value={formDetails.lastName}
                    onChange={handleInputChange}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formDetails.email}
                    onChange={handleInputChange}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    name="phone"
                    value={formDetails.phone}
                    onChange={handleInputChange}
                  />
                </Col>

                <Col>
                  <textarea
                    row="6"
                    placeholder="Mensaje"
                    name="message"
                    value={formDetails.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <button type="submit">
                    <span> {buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
