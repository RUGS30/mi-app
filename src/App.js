// import Button from "./Button"

// const arr = [
//     'Rugs feliz',
//     'Rugs triste',
//     'Rugs emocionado'
// ]

// const App = () =>{
//     const miVariable = false
//     if(miVariable){
//         return <p>Mi Variable dio true</p>
//     }
    
//     return (
//         <div>
//             <h1 onClick={(e) => console.log('click', e)}>Hola mundo</h1>
//             {arr.map(el => <p key={el} > {el} </p>)}
//             <Button onClick={() => console.log('clickeado')}>Enviar</Button>
//         </div>
//     )
// }

import { Component } from "react"

class Button extends Component{
    state = {}
    constructor(props){
        super(props)
        console.log('constructor', props);
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('componentdid update',prevProps,prevState);
    }
    componentWillUnmount(){
        console.log('Desmontando Componente',this.props,this.state);
    }
    render(){
        console.log('El Componente Button se renderizo');
        return(
                <button onClick={()=>this.setState({ prop:1 }) }>
                    Enviar 
                </button>
        )
    }
}

//Anatomia basada en Clases
class App extends Component{
    state = { //No puede tener otro nombre
        valor:3
    }
    render(){
        console.log(this.state);
        return (
            <div>
                <p className={`${this.state.valor}`}>Hola Mundo</p>
                {this.state.valor === 3
                ? <Button chanchito='feliz' /> : null}
                <button onClick={() => this.setState({valor:2})}>
                    Enviar desde App
                </button>

            </div>
        )
    }
}
export default App