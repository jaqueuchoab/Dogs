import React from 'react'
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

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
      <React.Suspense fallback={<div></div>}>
        <Head title='Estatisticas' />
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    )
  }
}

export default UserStatis;
