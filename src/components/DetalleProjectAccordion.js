import Accordion from 'react-bootstrap/Accordion';


export const DetalleProjectAccordion = () => {
    return (      
<Accordion className="custom-accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header className="custom-header">Encope - Web Oficial para el Servicio Penitenciario Federal</Accordion.Header>
    <Accordion.Body>
    Este es un sitio web que estoy desarrollando para ENCOPE, un organismo perteneciente al Servicio Penitenciario Federal de Argentina. Las funcionalidades que he desarrollado y que ya se encuentran en producción incluyen la posibilidad de subir, editar y eliminar noticias, así como la subida y descarga de archivos para proveedores. También implementé un sistema de seguimiento de inventario de productos en diferentes sucursales, y, por supuesto, una función de registro y inicio de sesión para los usuarios, con un panel administrativo para los administradores. <br></br>

Las tecnologías que utilicé en el desarrollo incluyen Node.js, Express, MySQL, Sequelize, EJS, JavaScript, API REST, CSS y Bootstrap 5. Además, trabajé con Scrum como metodología ágil, dividiendo las funcionalidades a desarrollar en sprints.
<br></br>
<a className='visita' href='http://www.encope.gob.ar/'>Visita el Sitio</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header className="custom-header">Guarida del Lector - E-commerce de venta de libros</Accordion.Header>
    <Accordion.Body>
     Es un E-commerce que desarrollé en equipo como parte de un proyecto integrador para Digital House, en el marco de un curso de full stack Node.js! Esta experiencia fue un emocionante viaje en el que aplicamos nuestras habilidades y conocimientos para crear una plataforma de compra en línea excepcional.

Trabajamos en conjunto, dividiendo el proyecto en 8 sprints, utilizando la metodología ágil Scrum. Cada sprint nos llevó más cerca de nuestro objetivo, y con el uso de tecnologías de vanguardia como Javascript, Node.js, Express, HTML 5, CSS 3, Bootstrap, MySQL (con Sequelize) y React, logramos convertir nuestras ideas en una realidad emocionante.

Desde la etapa de maquetado hasta la implementación de las funciones, este proyecto representó un logro en equipo que nos llena de orgullo. Espero que disfrutes explorando el resultado final tanto como nosotros disfrutamos desarrollándolo.<br></br>
<a className='visita' href='https://guarida-del-lector-opxd.onrender.com'>Visita el Sitio</a>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header className="custom-header">18.Drinks - E-commerce de venta de bebidas</Accordion.Header>
    <Accordion.Body>
    En el contexto de este proyecto, 18.Drinks se presenta como otro E-commerce. Lo que hace especial a este E-commerce es su arquitectura técnica, que se ha desarrollado de manera integral. En el lado del front-end, hemos empleado React para crear una interfaz de usuario dinámica y atractiva. Mientras tanto, en el backend, hemos aprovechado la combinación de Node.js y Express para gestionar la lógica de la aplicación y las solicitudes del cliente.

En cuanto a las funciones cruciales, como el registro de usuarios, el inicio de sesión, la gestión del carrito de compras y la opción de marcar productos como favoritos, hemos optado por utilizar MongoDB como gestor de base de datos. Esta elección nos ha permitido almacenar y acceder de manera eficiente a la información de los usuarios y los productos, brindando una experiencia sólida a nuestros clientes en el proceso de compra y navegación por el sitio web.
<br></br>
<a className='visita' href='https://drinks-mt56.onrender.com'>Visita el Sitio</a>
    </Accordion.Body>
  </Accordion.Item> 
  <Accordion.Item eventKey="3">
    <Accordion.Header className="custom-header">Proyecto-Cine- Sitio Web con sinopsis y reseña de películas</Accordion.Header>
    <Accordion.Body>
    El Proyecto Cine marca un hito significativo en mi trayecto en el mundo de la programación, ya que representó mi primera incursión en el trabajo en equipo y en la exploración de tecnologías fundamentales. Este proyecto fue mi punto de partida en el emocionante mundo de la programación.

Durante esta experiencia, tuve la oportunidad de dar mis primeros pasos en la creación de sitios web utilizando tecnologías esenciales como HTML5, CSS y JavaScript para el desarrollo front-end. Además, este proyecto marcó mi primera incursión en el consumo de una API, lo que amplió mi comprensión de cómo los datos pueden ser aprovechados y presentados de manera efectiva en una aplicación web.

El Proyecto Cine ocupa un lugar especial en mi corazón, ya que representa mis primeros pasos en un viaje de aprendizaje continuo y crecimiento en el mundo de la programación. Cada línea de código escrita y cada desafío superado en este proyecto me inspiraron a seguir explorando y desarrollando mis habilidades en este emocionante campo.<br></br>
<a className='visita' href='https://ismaelaxel.github.io/Proyecto_Cine.github.io/'>Visita el Sitio</a>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header className="custom-header">Mercado Liebre</Accordion.Header>
    <Accordion.Body>
      Mercado Liebre es un clon del popular Ecommerce "Mercado Libre", el cual fue propuesto por Digital House como practica en el marco de su curso de Fullstack Node.js. Esta practica emuló los requerimientos de una empresa paso por paso para el desarrollo del sitio, desde el maquetado hasta las funcionalidades básicas de un sitio Ecommerce, como el registro, login y el sistema de altas bajas y modificación. 
   <br></br>
<a className='visita' href='https://mercado-liebre-6zi7.onrender.com/'>Visita el Sitio</a>

    </Accordion.Body>
  </Accordion.Item>
</Accordion>      
  );
}