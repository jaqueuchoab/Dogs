import React from 'react';
import style from '../../Styles/StylesUser/UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar} from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    )
    setGraph(graphData);
  }, [data])

  return(
    <section className={`animeLeft ${style.graph}`}>
      <div className={`${style.total} ${style.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${style.graphItem}`}>
        <VictoryPie 
          data={graph} 
          innerRadius={50}
          padding={{top: 10, bottom: 10, left: 70, rigth: 70}}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fff',
              strokeWidth: 2,
            }
          }}
        />
      </div>
      <div className={`${style.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}/>
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
