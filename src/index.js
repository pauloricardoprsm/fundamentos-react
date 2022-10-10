
import './index.css'
import React from "react";
import ReactDOM from "react-dom";


import Primeiro from './components/Primeiro'
// import ComParametros from './components/ComParametros'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

ReactDOM.render( 
    <div>
        <Card titulo="Exercício X">
            <Primeiro/>
        </Card>
    </div>,
    document.getElementById('root')
)