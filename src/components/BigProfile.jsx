import { Wrapper } from '../assets/wrappers/BigProfile'
import profile from '../assets/personal.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
const BigProfile = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <section className='profile-container'>
        <img src={profile} alt='profile' />
        <h2>
          {' '}
          <span>Hello</span> {user?.user?.name || ''}
        </h2>
      </section>
      <section className='btn-container'>
        <Link to='/profile' className='btn btn-update'>
          Update
        </Link>
        <Link
          to='/landing'
          className='btn btn-logout'
          onClick={() => dispatch(logoutUser())}
        >
          Logout
        </Link>
      </section>
    </Wrapper>
  )
}
export default BigProfile
