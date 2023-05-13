import React from 'react';
import style from './Image.module.css'

const Image = ({ alt, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true);
  // Função que trata o método de onLoad, um método que acontece quando a imagem é totalmente carregada.
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={style.wrapper}>
      {skeleton && <div className={style.skeleton}></div>}
      <img onLoad={handleLoad} src="" alt="" className={style.img} {...props}/>
    </div>
  )
}

export default Image;