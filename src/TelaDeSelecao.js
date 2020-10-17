import React from 'react'
import Cronometro from './Cronometro'
import Temporizador from './Temporizador'
import Relogio from './Relogio'

import Menu from './Menu'



const TelaDeSelecao = (props) =>{
    switch (props.type) {

      case 1:
        return (
         <>
         <Menu/>
       </>
    
    )


  case 2:
    return (
     <>
     <Relogio/>
   </>

)
   
    case 3:
        return (
     <>
       
        <Cronometro/>
        </>
 )

    case 4:
    return(
        <>
        <Temporizador/>
        </>
        
        
    )

  


    }
}
export default TelaDeSelecao;