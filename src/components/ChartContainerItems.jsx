import { useState } from 'react'
import { Wrapper } from '../assets/wrappers/ChartContainer'
import BarChartItem from './BarChart'
import AreaChart from './AreaChart'
const ChartContainerItems = ({ data }) => {
  const [barChart, setBarChart] = useState(true)

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <div className='btn-container'>
        <button
          className='btn'
          type='button'
          onClick={() => setBarChart(!barChart)}
        >
          {barChart ? 'Area Chart' : 'Bar Chart'}
        </button>
      </div>
      {barChart ? <BarChartItem data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}
export default ChartContainerItems
