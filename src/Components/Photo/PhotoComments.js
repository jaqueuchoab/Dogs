import React from 'react';
import { UserContext } from '../../UserContext.js'
import PhotoCommentsForm from './PhotoCommentsForm';
import style from '../../Styles/StylesPhoto/PhotoComments.module.css';

const PhotoComments = (props) => {
  // Só terá comentários caso algum usário esteja logado, para veriicação usa o contexto abaixo:
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={style.comments}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{`${comment.comment_author}: `}</b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments}/>}
    </>
  )
}


export default PhotoComments;
