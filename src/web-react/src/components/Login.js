import React, { useEffect } from 'react';
import "./style.css";
import fetch from 'fetch'



export default function Login() {
  
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("logado"))
      window.location.href = '/'
  }, [])

  useEffect (() =>{
    fetch("localhost:3000")
    .then ((res)=> res.json())
    .then (
        (res)=>{
          set.Login(res)
        }
        )
      }
  )

  const handleChange = (e) => {
    let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    setLogin(value)
  }

  const handleChange1 = (e) => {
    let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    setPassword(value)
  }

  const ricardoLogar = (useEffect) => {

   
    if (login === "ricardo" && password === "12345") {
      localStorage.setItem("logado", true)
      window.location.href = '/'
    }
    else {
      window.alert("Usuario invalido")
    }
  }

  /*const fetchUserData = () =>{
    fetch("localhost:3000")
    .then (res)=>res.json())
    .then (
        (res)=>{
          set.ricardoLogar(res)
        }
        )
      }


      }
    )
    usuarios =>{
      return usuarios.j.son()
    })
    .then(data => {
      setUsers(data)
    })
  }*/

  return (
    
    <div className="telaLogin">
      
      <h1>Login</h1>

      <input name="text" placeholder='username' onChange={handleChange} value={login || ""} />
      <input type = "password" placeholder='password' onChange={handleChange1} value={password || ""} />

     
       <div className="login-btn" onClick={ricardoLogar}>Confirmar</div>

       
      </div>  
    
  );
}

