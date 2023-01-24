import React from 'react';

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Adicionar um novo usuário por meio de Fetch | Método POST
    /* 
      fetch(url, configarações{
        metodo, 
        headers(indicam o que está sendo mandado para a api),
        body(utilizando metodo stringfy do objeto JSON, para que os dados sejam convertidos para string),
        obs: no body, ao passar os dados a ordem de como as chaves são passadas há interferência no POST
      })
    */
    fetch('http://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      setToken(json.token);
      return json;
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='username' 
        value={username} 
        onChange={({ target }) => setUsername(target.value)}
      />

      <input 
        type="password" 
        placeholder='password' 
        value={password} 
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  );
}

export default TokenPost;
