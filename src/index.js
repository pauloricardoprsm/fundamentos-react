import './index.css'
import React from "react";
import ReactDOM from "react-dom";

// import Primeiro from './components/Primeiro'
// import ComParametros from './components/ComParametros'
import ComFilhos from './components/ComFilhos'

ReactDOM.render( 
    <div>
        <ComFilhos>
                <li>Paulo</li>
                <li>Ricardo</li>
                <li>Siqueira</li>
        </ComFilhos>
        {/*<Primeiro/>
        <ComParametros titulo="Esse é o título"
           subtitulo="Esse é o subtitulo 2"></ComParametros>
        */}
    </div>,
    document.getElementById('root')
)