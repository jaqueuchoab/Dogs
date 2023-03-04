import React from 'react';
import style from '../../Styles/StylesFeed/FeedPhotosItem.module.css';

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={style.photo} onClick={handleClick}>
      <img src={photo.src} title={photo.title} alt={photo.title} />
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem;
