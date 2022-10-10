import React from "react";

// Css
import './Card.css'

export default (props) => 
<div className="Card">
    <div className="Conteudo">
        {props.children}
    </div>
    <div className="Footer">
        {props.titulo}
    </div>
</div>