import React from 'react';

export default function Portal() {
  React.useEffect(() => {

    if (!localStorage.getItem("logado"))
      window.location.href = '/login'
  }, [])


  const handleSair = () => {
    localStorage.removeItem("logado")
    window.location.href = '/login'
  }

  return (
    <div className="">
      tela de conteudo
      <button onClick={handleSair} >Sair</button>
    </div>
  );
}
