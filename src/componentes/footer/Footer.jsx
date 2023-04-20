import React from "react";
import "./footer.css";

const Footer = ({title}) => {
    return (
        <>
        <footer><h3>{title}</h3><button type="button" className="btn btn-primary">Agregar Imagenes</button></footer>
        
        </>
    )
}
export default Footer;