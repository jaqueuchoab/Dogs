import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1, 2]);

  React.useEffect(() => {
    function infinityScroll() {

    }

    window.addEventListener('wheel', infinityScroll);
    window.addEventListener('scroll', infinityScroll);
    return(() => {
      window.removeEventListener('wheel', infinityScroll);
      window.removeEventListener('wheel', infinityScroll);
    })

  }, []);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      {pages.map((page) => {
        <FeedPhotos user={user} key={page} page={page} setModalPhoto={setModalPhoto}/>
      })}
      <FeedPhotos user={user} page="2" setModalPhoto={setModalPhoto}/>
    </div>
  )
}

export default Feed;
