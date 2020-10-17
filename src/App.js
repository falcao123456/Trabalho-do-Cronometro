import React, {useState} from 'react';
import TelaDeSelecao from './TelaDeSelecao'
import './App.css';
import TimerIcon from '@material-ui/icons/Timer';
import IconButton from '@material-ui/core/IconButton';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import HomeIcon from '@material-ui/icons/Home';




const App = () =>{
  const [type, setType] = useState(1)
  return(
    <>
    
    <IconButton color="" onClick={() => setType(1)}  aria-label={"HOMER"}>
        <HomeIcon></HomeIcon>
        </IconButton>

    <IconButton color="" onClick={() => setType(2)}  aria-label={"Relogio"}>
        <AccessTimeIcon></AccessTimeIcon>
        </IconButton>

    <IconButton color="" onClick={() => setType(3)}  aria-label={"Cronometro"}>
        <TimerIcon ></TimerIcon >
        </IconButton>
        
    <IconButton color="" onClick={() => setType(4)}  aria-label={"Temporizador"}>
        <HourglassFullIcon></HourglassFullIcon>
        </IconButton>

    <TelaDeSelecao type ={type}/>
    </>
  )
}


export default App;
