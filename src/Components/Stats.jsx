import { useEffect, useState } from 'react'
import { COLORES_STATS } from '../Constantes'

export function Stats (props) {
  const { stats } = props
  const [maxStats, setMaxStats] = useState([])

  useEffect(() => {
    const getHighestStat = () => {
      const max = Math.max(...stats.map(stat => stat.base_stat))
      const stat = stats.filter(stat => stat.base_stat === max)
      setMaxStats(stat)
    }
    getHighestStat()
  }, [stats])

  return (
        <div className="row mt-5 col-6 mx-auto">
                {stats.map((stat, index) => {
                  return (
                    <div key={index} className="col-md-6 col-12 text-center mt-3">
                        <label className="tipo" title={'Stat: ' + stat.stat.name}
                            style={{
                              width: '100%',
                              backgroundColor: COLORES_STATS[stat.stat.name],
                              borderColor: COLORES_STATS[stat.stat.name],
                              boxShadow: '0 0.5em ' + COLORES_STATS[stat.stat.name] + ', 0 -0.5em ' + COLORES_STATS[stat.stat.name] + ' , 0.5em 0 ' + COLORES_STATS[stat.stat.name] + ' , -0.5em 0 ' + COLORES_STATS[stat.stat.name]
                            }}>{stat.stat.name}
                        </label>
                        {maxStats.some(maxStat => maxStat.stat.name === stat.stat.name)
                          ? <label className="text-white backGroudMaxStat mt-3 pr-5 ml-5">{stat.base_stat}</label>
                          : <label className="text-white mt-3">{stat.base_stat}</label>}

                    </div>
                  )
                })}

        </div>
  )
}
