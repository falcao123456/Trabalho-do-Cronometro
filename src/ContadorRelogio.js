import React from 'react';
import './App.css';


const ContadorRelogio = (props) => (
    <h1 class="my-title">{props.horas}:{props.minutos}:{props.segundos}</h1>
)

export default ContadorRelogio