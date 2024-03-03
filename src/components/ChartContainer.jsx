import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { showStats } from '../features/allJob/allJobSlice'
import { Wrapper } from '../assets/wrappers/ChartContainer'
import ChartContainerItems from './ChartContainerItems'
const ChartContainer = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(showStats())
  }, [])
  if (isLoading) {
    return (
      <Wrapper>
        <div className='loading'></div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      {monthlyApplications?.length > 1 && (
        <ChartContainerItems data={monthlyApplications} />
      )}
    </Wrapper>
  )
}
export default ChartContainer
