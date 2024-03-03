import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import { Wrapper } from '../assets/wrappers/PageContainer'
import { useDispatch } from 'react-redux'
import { changePage } from '../features/allJob/allJobSlice'
const PageContainer = ({ numOfPages, page }) => {
  const dispatch = useDispatch()
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1
  })
  const nextPage = () => {
    let newPage = page + 1
    if (newPage > numOfPages) newPage = 1
    dispatch(changePage(newPage))
  }
  const prevPage = () => {
    let newPage = page - 1
    if (newPage < 1) newPage = numOfPages
    dispatch(changePage(newPage))
  }
  return (
    <Wrapper>
      <button className='btn prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={pageNumber == page ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          )
        })}
      </div>
      <button className='btn next-btn' onClick={nextPage}>
        Next <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}
export default PageContainer
