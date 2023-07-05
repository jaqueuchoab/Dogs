import React from 'react';
import {Link} from 'react-router-dom';
import style from '../../Styles/StylesPhoto/PhotoContent.module.css';
import { UserContext } from '../../UserContext';
import PhotoComments from './PhotoComments';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${style.photo} ${single ? style.single : ""}`}>
      <div className={style.img}>
        <Image src={photo.src} alt={photo.title}/>
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === 1 ? `${photo.idade} ano` : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} single={single}/>
      </div>
    </div>
  );
}

export default PhotoContent;
