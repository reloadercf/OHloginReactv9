import React,{useState} from 'react';

function Formulario({handleLogin}) {
    const [email,setEmail]=useState('')
const [pass,setPass]=useState('')

    return (
        <div>
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" onChange={(e)=>{setPass(e.target.value)}} />
            <button onClick={()=>{handleLogin(email,pass)}}>Iniciar Sesion</button>
        </div>
    );
}

export default Formulario;