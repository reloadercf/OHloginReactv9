import React,{useState} from 'react'
import './App.css';
import Formulario from './components/Formulario'
import Welcome from './components/Welcome'
import {createAccount,isUser} from './firebaseconfig'
import {getAuth,onAuthStateChanged} from "firebase/auth"
function App() {

  const [user,setUser]=useState(null)

  const handleLogin =(email,password)=>{
    createAccount(email,password);
  }
  
   
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user.uid);
        // ...
      } else {
      }
    });
  

  return (
    <div className="App">
      {user?<Welcome/>:<Formulario handleLogin={handleLogin} />}
    </div>
  );
}

export default App;
