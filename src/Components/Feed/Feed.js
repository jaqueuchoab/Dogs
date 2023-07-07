import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1, 2]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infinityScroll() {
      if(infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if(scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infinityScroll);
    window.addEventListener('scroll', infinityScroll);
    return(() => {
      window.removeEventListener('wheel', infinityScroll);
      window.removeEventListener('wheel', infinityScroll);
    })

  }, [infinite, setInfinite]);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      {pages.map((page) => {
        return <FeedPhotos user={user} key={page} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite}/>
      })}
      <FeedPhotos user={user} page="2" setModalPhoto={setModalPhoto}/>
    </div>
  );
}

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Feed;
