import React from 'react';
import "./style.css";


export default function Login() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("logado"))
      window.location.href = '/'
  }, [])

  const handleChange = (e) => {
    let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    setLogin(value)
  }

  const handleChange1 = (e) => {
    let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    setPassword(value)
  }

  const ricardoLogar = () => {

    //result = post(login,senha)
    //resulto===ok

    if (login === "ricardo" && password === "12345") {
      localStorage.setItem("logado", true)
      window.location.href = '/'
    }
    else {
      window.alert("Usuario invalido")
    }
  }

  return (
    
    <div className="telaLogin">
      
      <h1>Login</h1>

      <input name="text" placeholder='username' onChange={handleChange} value={login || ""} />
      <input type = "password" placeholder='password' onChange={handleChange1} value={password || ""} />

     
       <div className="login-btn" onClick={ricardoLogar}>Confirmar</div>

       
      </div>  
    
  );
}
