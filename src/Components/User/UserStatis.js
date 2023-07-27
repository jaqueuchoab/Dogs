import React from 'react'
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import UserStatsGraphs from './UserStatsGraphs';

const UserStatis = () => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    async function getData() {
      const {url, options} = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if(loading) <Loading />
  if(error) <Error error={error}/>
  if(data) {
    return (
      <div>
        <Head title='Estatisticas' />
        <UserStatsGraphs data={data}/>
      </div>
    )
  }
}

export default UserStatis;
