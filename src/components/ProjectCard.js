import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, link}) => {
return (
    <Col sm={6} md={4} className="text-center">
        <a href={link} className="text-white">
        <div className="proj-imgbx">            
            <img src={imgUrl}/>
            <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            </div>                 
        </div>
        </a>      
        <a href={link} className="text-white text-center">
            Link al sitio desplegado
        </a>  
    </Col>
)
}