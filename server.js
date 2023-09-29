require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
const corsOptions = {
    origin: 'https://svarium.github.io/myPortfolio/', // Reemplaza con tu URL de frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el uso de cookies, si es necesario
  };
// Habilita CORS
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: "Gmail", // Cambia esto según el servicio de correo que utilices
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
});



// Ruta para manejar el envío de correos electrónicos
app.post("/send-email", (req, res) => { //la ruta
  const { firstName, lastName, email, phone, message } = req.body;


  const mailOptions = {
    from: email,
    to:'ezequielmunoz@encope.gob.ar', // Cambia esto al correo del destinatario
    subject: message.slice(0,100),
    text: `
      Nombre: ${firstName} ${lastName}
      Email: ${email}
      Teléfono: ${phone}
      Mensaje: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Hubo un error al enviar el correo." });
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).json({ message: "Correo enviado con éxito." });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
