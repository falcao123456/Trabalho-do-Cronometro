import React, {useState} from 'react';
import TelaDeSelecao from './TelaDeSelecao'
import Botao from './Botao'
import './App.css';




const App = () =>{
  const [type, setType] = useState(1)
  return(
    <>
    
    <Botao onClick={()=>setType(1)} label={"Menu"}/> 
    <Botao onClick={()=>setType(2)} label={"Cronometro"}/>
    <Botao onClick={()=>setType(3)} label={"Temporizador"}/>
    <Botao onClick={()=>setType(4)} label={"Relogio"}/>
   
    <TelaDeSelecao type ={type}/>
    </>
  )
}


export default App;
