import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import style from '../../Styles/StylesFeed/FeedPhotos.module.css';


const FeedPhotos = ({user, page, setModalPhoto}) => {
  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({page, total: 6, user});
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request, user, page]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map((photo) => {
          return <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
        })}
      </ul>
    )
  } else {
    return null;
  }
}

export default FeedPhotos;
