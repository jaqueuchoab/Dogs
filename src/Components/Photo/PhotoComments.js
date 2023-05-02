import React from 'react';
import { UserContext } from '../../UserContext.js'
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = ({props}) => {
  // Só terá comentários caso algum usário esteja logado, para veriicação usa o contexto abaixo:
  const { login } = React.useContext(UserContext);
  return (
    <div>
      {login && <PhotoCommentsForm id={props.id}/>}
    </div>
  )
}

export default PhotoComments;
