import React from "react"
import CardCSS from './Card.module.css';

    const Card = (props) => {
      
        return (
            <div className={`${CardCSS.card} ${props.className}`}>{props.children}</div>
        );
    }

export default Card;