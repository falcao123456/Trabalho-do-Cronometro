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

    React.useEffect(() => {

        setInterval(() => {
            var Brasil = moment.tz("America/Bahia");
            var Eua = moment.tz("America/New_York");
            var India = moment.tz("Asia/Colombo");
            var China = moment.tz("Asia/Macau");
            var Australia = moment.tz("Australia/Sydney");
            var Japan = moment.tz("Asia/Tokyo");
            setBrasil(Brasil.format("DD-MM-YYYY H:m:s"))
            setEua(Eua.format("DD-MM-YYYY H:m:s"))
            setIndia(India.format("DD-MM-YYYY H:m:s"))
            setChina(China.format("DD-MM-YYYY H:m:s"))
            setAustralia(Australia.format("DD-MM-YYYY H:m:s"))
            setJapan(Japan.format("DD-MM-YYYY H:m:s"))
        }, 1000)

    }, [])

    return (


        <div class="relo">

            <div>
                <h1>Relógio</h1>
            </div>
            <br></br>

            <h1>Brasília, Brasil:</h1>
            <h2 className="localTime mb-30">{brasil}</h2>

            <div class="relo2">
                <Radio.Button onClick={toggleCountries} id="toggleCountries">Outras Localidades</Radio.Button>
                <div className="d-none" id="countries">

                    <h3>Londres, Reino Unido:</h3>
                    <p>{eua}</p>
                    <h3>Nova Iorke, EUA:</h3>
                    <p>{india}</p>
                    <h3>Xangai, China:</h3>
                    <p>{china}</p>
                    <h3>Paris, França:</h3>
                    <p>{australia}</p>
                    <h3>Japan, França:</h3>
                    <p>{japan}</p>
                </div>    </div>
        </div>








    )
}

export default Relogio