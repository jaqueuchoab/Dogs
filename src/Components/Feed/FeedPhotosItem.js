import React from 'react';
import style from '../../Styles/StylesFeed/FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({photo, setModalPhoto}) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={style.photo} onClick={handleClick}>
        <Image src={photo.src} title={photo.title} alt={photo.title}/>
      <span className={style.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem;
