import React from 'react';
import ContadorTemporizador from './ContadorTemporizador'
import LabelTemporizador from './LabelTemporizador'
import './App.css'
import Botao from './Botao'



class Temporizador extends React.Component {
    constructor(props){
      super(props);
      this.state={
        stop: false,
        horas: 0,
        segundos: 0,
        minutos: 0,
        milisegundos:0,
        name: "Temporizador",
        nameStop1: "Stop",
     
        parcial: ""



    };
}


zerarTemporizador() {
    this.state.horas = 0
    this.state.segundos = 0
    this.state.minutos = 0
    this.state.milisegundos= 0
    this.state.parcial = ""
 }

 parcial(){
    let p = this.state.horas+ ":"
    + this.state.minutos + ":"
    + this.state.segundos + ":" 
    +this.state.milisegundos + "\n\n"
    this.state.parcial = this.state.parcial + p

  }

  pararTempo1(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop1 = "Stop"
     
    else
      this.state.nameStop1 = "Start"
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(  
         function (state, props) {


          if(state.minutos >=4 ){
            this.zerarMinuto();
            this.incrementarHora(state);
         }

          if (state.segundos >=2 ) {
            this.zerarSegundo();
            this.incrementarMinuto(state);
          }

          if(state.milisegundos >=300){
            this.zerarMilisegundo();
            this.incrementarSegundo(state);
          }
         return({milisegundos: state.milisegundos +1})
            
            
          } )
 
    }  
  }

  zerarSegundo(){
    this.setState({
      segundos:0

    })
  }

  zerarMinuto(){
    this.setState({

      minutos: 0

    })
  }

  zerarHora(){
    this.setState({
      horas: 0

    })
  }

  zerarMilisegundo(){
    this.setState({
      milisegundos:0
    })
  }

  incrementarHora(state){
    this.setState(() =>{
      return {horas: state.horas +1}
    })
  };
  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos +1}
    })
  };

  incrementarSegundo (state) {
    this.setState(() => { 
      return {segundos: state.segundos +1}
    })
  };

  incrementarMiliSegundo (state) {
    this.setState(() => { 
      return {milisegundos: state.milisegundos +1}
    })
  };

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 10);
  this.timer = setInterval(
    () => this.incrementar(), 1000);
  }

  render(){

    return (
     
<div>
      <LabelTemporizador nameo={this.state.nameo} />
      <ContadorTemporizador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} milisegundos={this.state.milisegundos} />
      <Botao onClick={() => this.zerarTemporizador()} label={"Zerar"} />
      <Botao onClick={() => this.pararTempo1()} label={this.state.nameStop1} />
   </div>

    )
  }

}




export default Temporizador