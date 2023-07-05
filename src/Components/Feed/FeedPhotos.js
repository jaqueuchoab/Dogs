import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import style from '../../Styles/StylesFeed/FeedPhotos.module.css';


const FeedPhotos = ({user, page, setModalPhoto, setInfinite}) => {
  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({page, total, user});
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data && data.length !== 0) {
    console.log("data", data.length)
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
