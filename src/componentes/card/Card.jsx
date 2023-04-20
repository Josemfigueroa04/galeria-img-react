import React from "react";
import "./card.css";

const Card = ({title, description, img}) => {
    return (
        <>
            <div className="card">
                <img src={img} alt={title} />
                    <div className="card-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    </div>
            </div>
        </>
    )
}


export default Card;