import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
import { Wrapper } from '../assets/wrappers/Error'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404)
    return (
      <Wrapper>
        <section>
          <img src={img} alt='not found' className='img' />
          <h2>Ohh! the page Not Found</h2>
          <Link to='/landing'>Back Home</Link>
        </section>
      </Wrapper>
    )
  return (
    <Wrapper>
      <div>
        <h1>There was An Error...</h1>
        <Link to='/landing'>Back Home</Link>
      </div>
    </Wrapper>
  )
}
export default Error
