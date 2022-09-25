import './App.css';
import { useState } from 'react';

function App() {
  
  const [resultado, setResultado] = useState("Haz click para jugar");

  const play = (valor)=>{
    let valorCompu="";
    const jugadaCompu = Math.floor(Math.random() * 3); //genera un valor random para setear el valorCompu
    switch(jugadaCompu){
      case 0:
        valorCompu="piedra";
        break;
      case 1:
        valorCompu="papel";
        break;
      default:
        valorCompu="tijera";
    }
    //if (jugadaCompu===0){
    //  valorCompu="piedra";
    //}
    //else if (jugadaCompu===1){
    //  valorCompu="papel";
    //}else {
    //  valorCompu="tijera";
    //}
    console.log(valor+" vs "+valorCompu); //veo la competencia
    if (valor===valorCompu){              //seteo el resultado
      setResultado("Empataste contra "+valorCompu);
    }
    else if((valor==="piedra"&&valorCompu==="papel")||(valor==="tijera"&&valorCompu==="piedra")||(valor==="papel"&&valorCompu==="tijera")){
      setResultado("Perdiste contra "+valorCompu);
    }
    else{
      setResultado("Ganaste contra "+valorCompu);
    }
  }

  return (
    <div className="App ">
      <header className="App-header text-white m-1 p-1">
        <h2>PIEDRA, PAPEL O TIJERA</h2>
        <button onClick={()=>play("piedra")} className="btn-success text-white m-1 p-1">PIEDRA</button>
        <button onClick={()=>play("papel")} className="btn-warning text-white m-1 p-1">PAPEL</button>
        <button onClick={()=>play("tijera")} className="btn-danger text-white m-1 p-1">TIJERA</button>
        <div className="bg-dark text-white m-1 p-1">{resultado}</div>   
      </header>
    </div>
  );
}

export default App;
 