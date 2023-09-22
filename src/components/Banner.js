import { useState, useEffect} from "react";
import {Row, Container, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/WhatsApp Image 2023-09-22 at 17.36.45.jpeg"
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrollador Full Stack Node.js", ];//aca puedo agregar mas cosas sobre lo que hago
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={8}>
                        <TrackVisibility>
                        {({isVisible}) => 
                      <div className={isVisible ? "animated_animate__fadeIn" : "" }>  
                    <span className="tagline">Bienvenido a mi Potafolio</span>
                    <h1>{'Ezequiel Muñoz - '}<span className="wrap">{text}</span></h1>
                    <p className="text-justify">Durante los últimos 8 años, me sumergí en el mundo de la informática del Servicio Penitenciario Federal. Hice de todo: arreglé compus, cuidé servidores, instalé y configure redes inalambricas y ahora me la paso desarrollando el sitio web oficial. Soy un amante de la tecnología y siempre quiero aprender más. Estoy aquí para conectar con otros techies, compartir experiencias y, ¡afrontar desafíos emocionantes! 😄🚀</p>
            <button onClick={() => console.log('connect')}>Let´s connect <ArrowRightCircle size={25} /> </button>
                    </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                    <img className="iconProfile shadow" src={headerImg} alt="header Img" />{/* aca va la foto flotante. debo pensar que colocar */}
                    </Col>
                </Row>
            </Container>

        </section>
    )
}