import React from 'react';

import moment from 'moment-timezone'
import { Radio } from 'antd'


const generateTime = (extraHours) => {
    const today = new Date();
    const totalHours = today.getHours() + extraHours
    const time = totalHours + ":" + today.getMinutos() + ":" + today.getSegundos();

    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    return time + " - " + date;
}


function toggleCountries() {
    const outrosPaises = document.getElementById("countries");
    outrosPaises.classList.toggle("d-none")
}

const Relogio = (props) => {

    const [brasil, setBrasil] = React.useState()
    const [eua, setEua] = React.useState()
    const [india, setIndia] = React.useState()
    const [china, setChina] = React.useState()
    const [australia, setAustralia] = React.useState()
    const [japan, setJapan] = React.useState()
    


export default Relogio