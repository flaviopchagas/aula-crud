import React from 'react';

export default function Login() {
  const [login, setLogin] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("logado"))
      window.location.href = '/'
  }, [])

  const handleChange = (e) => {
    let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
    setLogin(value)
  }

  const ricardoLogar = () => {

    //result = post(login,senha)
    //resulto===ok

    if (login === "ricardo") {
      localStorage.setItem("logado", true)
      window.location.href = '/'
    }
    else {
      window.alert("Usuario invalido")
    }
  }

  return (
    <div className="">
      <input name="username" onChange={handleChange} value={login || ""} />

      <button onClick={ricardoLogar}>Login</button>
    </div>
  );
}
