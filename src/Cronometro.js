import React from 'react';
import Contador from './Contador'
import LabelCronometro from './LabelCronometro'
import './App.css'
import Botao from './Botao'



class Cronometro extends React.Component {
    constructor(props){
      super(props);
      this.state={
        stop: true,
        horas: 0,
        segundos: 0,
        minutos: 0,
        milisegundos:0,
        name: "Conômetro",
        nameStop: "Start",
        parcial: "",
        parciais: []



    };
}


zerarCronometro() {
    this.state.horas = 0
    this.state.segundos = 0
    this.state.minutos = 0
    this.state.milisegundos= 0
    this.state.parcial = ""
 }

 parcial(){
    let p = this.state.horas+ ":" + this.state.minutos + ":"+ this.state.segundos + ":" +this.state.milisegundos + "\n\n"
    this.state.parcial = this.state.parcial + p

  }

  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
        
      })
    if (this.state.stop) 
       this.state.nameStop = "Stop"
    
      
    else
      this.state.nameStop = "Start"
      
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(  
         function (state, props) {


          if(state.minutos >=60 ){
            this.zerarMinuto();
            this.incrementarHora(state);
         }

          if (state.segundos >=60 ) {
            this.zerarSegundo();
            this.incrementarMinuto(state);
          }

          if(state.milisegundos >=100){
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
     
      <div class= "cro">
        <LabelCronometro name={this.state.name} />
        
        
        <div class="butao">
        <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} milisegundos={this.state.milisegundos} />
    <div class="butao2">
         <Botao onClick={() => this.zerarCronometro()} label={"Zerar"}        />

        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Pacial"} />
        <LabelCronometro name={this.state.parcial} />
{
        this.state.parciais.map(objeto => (
        <h3>{objeto}</h3>
        ))
        }


       <br></br>
       </div> </div>
        
       </div>

    )
  }

}




export default Cronometro;