import React, { Component } from 'react'
import { Button,notification,Input } from 'antd'
import './App.css';
import Alert from '@material-ui/lab/Alert';

 class Temporizador extends Component {
   state = {
        minutos: 0,
        segundos: 0,
        load: false,
    }

    openNotification(){
        
        notification.open({
          message: '',
          description:
            'Iniciando sua contagem...',
            onClick: () => {
            console.log('Notification Clicked!');
            
          },
        });
    };

    finishNotification(){
        notification.open({
          message: '',
          description:
            'Sua contagem acabou...',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
    };
    minuteFinalNotification(){
        notification.open({
          message: '',
          description:
            'ultimo ',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
    };

    resetTime() {

        this.setState({
            minutos: 0,
            segundos: 0,
            load: false
        })
    }

    stopTime(){
        console.log(this.state)
        this.setState({...this.state, load: false})
        clearInterval(this.myInterval)
    }


    start() {

        this.setState({...this.state, load: true})
        
        this.myInterval = setInterval(() => {
            const { segundos, minutos } = this.state


            if (segundos > 0) {
                this.setState(({ segundos }) => ({
                    segundos: segundos - 1
                }))
            }
            if (segundos === 0) {             
                if (minutos === 0) { 
                    this.setState({...this.state, load: false})
                    
                    clearInterval(this.myInterval)
                    console.log(minutos)
                    console.log('fim')
                } else {
                    this.setState(({ minutos }) => ({
                        minutos: minutos - 1,
                        segundos: 59
                    }))
                }
            }
        }, 1000)
    
    }


    render() {


        const { minutos, segundos} = this.state
        return (
            <div>
                <br></br>
<div>
         <h1>Temporizador</h1>
</div>

                <div class= "radio"> 
                    
                {this.state.load === false ? (
                <Button  onClick={() => this.start()}>Iniciar</Button>
               
                ): <Button load={<h1>Iniciando...</h1>} onClick={() => this.start()}>Iniciar</Button>}
                <Button onClick={() => this.stopTime()}>Pausar</Button>
                <Button onClick={() => this.resetTime()}>Zerar</Button>
                </div>


                <div  class= "input"> 
                    <label htmlFor="minutos">Minutos</label>
                    <Input  placeholder="Minutos" type="number" value={minutos} name="minutos" onChange={({target: {value}}) => {
                        console.log(this.state)
                        this.setState({...this.state, minutos: value})
                    }}/>

                <h1><br></br></h1>

                <div>
                    <label htmlFor="segundos">Segundos</label>
                    <Input placeholder="Segundos" type="number" value={segundos} name="seconds" onChange={({target: {value}}) => {
                        console.log(this.state)
                        this.setState({...this.state, segundos: value})
                    }}/>



        { (() => {

         if( this.state.segundos==0 && this.state.minutos==0){

         return (

         <div class="alarme" >
         
        <Alert variant="filled" severity="sucess">
         <h1>Tempo Finalizado!</h1>
          </Alert> 
          </div>
)
         
} 

        })() } 



                </div>




                </div>



            </div>
        )
    }
}

export default Temporizador