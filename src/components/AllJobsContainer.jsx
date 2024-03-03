import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../features/allJob/allJobSlice'
import { Wrapper } from '../assets/wrappers/allJobsContainer'
import Jobs from './Jobs'
import PageContainer from './PageContainer'

const AllJobsContainer = () => {
  const dispatch = useDispatch()

  const {
    jobs,
    totalJobs,
    numOfPages,
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    search,
    page,
  } = useSelector((store) => store.allJobs)
  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return (
      <Wrapper>
        <div className='loading'></div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h2 className='totalJobs'>
        {jobs.length > 2 ? `${totalJobs} Jobs` : `${totalJobs} Job`} Found
      </h2>
      <section className='jobs-container'>
        {jobs.map((job) => {
          return <Jobs job={job} key={job._id} />
        })}
      </section>
      {numOfPages > 1 && <PageContainer numOfPages={numOfPages} page={page} />}
    </Wrapper>
  )
}
export default AllJobsContainer
