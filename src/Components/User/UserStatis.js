import React from 'react'
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';

const UserStatis = () => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    async function getData() {
      const {url, options} = GET_STATS();
      await request(url, options);
    }
  }, [request]);

  if(loading) <Loaging />
  if(error) <Error />
  if(data) {
    
  }

  return (
    <div>
      <Head title='Estatisticas' />
      UserStatis
    </div>
  )
}

export default UserStatis;
