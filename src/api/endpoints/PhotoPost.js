import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Objeto FormData auxilia na construção de um conjunto de pares chave/valor representando campos de um elemento form e seus valores, os quais podem ser facilmente enviados utilizado o método send()/Post
    const formData =  new FormData();
    // formData.append(), acrescenta um novo valor em uma chave existente dentro de um objeto FormData, ou adiciona a chave se ela ainda não existir.
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    fetch('http://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      // Configurando o Authorization para total acesso ao endpoint, para realização uso da palavra Bearer + o token 
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='token' 
        value={token} 
        onChange={({ target }) => setToken(target.value)}
      />
      <input 
        type="text" 
        placeholder='nome' 
        value={nome} 
        onChange={({ target }) => setNome(target.value)}
      />
      <input 
        type="text" 
        placeholder='peso' 
        value={peso} 
        onChange={({ target }) => setPeso(target.value)}
      />
      <input 
        type="text" 
        placeholder='idade' 
        value={idade} 
        onChange={({ target }) => setIdade(target.value)}
      />
      <input 
        type="file"
        onChange={({ target }) => setImg(target.files[0])}
      />
      <button>Enviar</button>
    </form>
  );
}

export default PhotoPost;
