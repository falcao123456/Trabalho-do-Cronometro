import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      horas: 0,
      segundos: 0,
      minutos: 0,
      milisegundos:0,
      stop: false,
      nameStop: "Stop",
      name: "atual:", 
      parcial: ""

    };
  }

   zerarCronometro() {
      this.state.horas = 0
      this.state.segundos = -1
      this.state.minutos = 0
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.horas+ ":"+ this.state.minutos + ":"+ this.state.segundos + "\n\n"
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


          if(state.minutos >=4 ){
            this.zerarMinuto();
            this.incrementarHora(state);
         }

          if (state.segundos >=2 ) {
            this.zerarSegundo();
            this.incrementarMinuto(state);
          }

          if(state.milisegundos >=300){
            this.zerarMiliSegundo();
            this.incrementarSegundo(state);
          }
         return({milisegundos: state.milisegundos +1})
            
            
          } )
 
    }  
  }
 
  zerarHora () {
    this.setState({ 
      horas: 0 
    })
  }

  zerarMinuto () {
    this.setState({ 
      minutos:0
    })
  }

    zerarSegundo () {
    this.setState({ 
      segundos: 0 
    })
  }

  zerarMiliSegundo () {
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
        
        <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} milisegundos={this.state.milisegundos} />
        <LabelRelogio name={this.state.name} />
        <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Pacial"} />
        <LabelRelogio name={this.state.parcial} />
      </div>







    );
  }
}

export default App;
