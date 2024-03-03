import { Wrapper } from '../assets/wrappers/Profile'
import { LuLogOut } from 'react-icons/lu'
import { FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  clearStore,
  logoutUser,
  toggleIsProfile,
} from '../features/user/userSlice'
const Profile = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div>
        <NavLink
          to='/profile'
          className='user '
          onClick={() => dispatch(toggleIsProfile())}
        >
          <FaUser />
          <h4>Profile</h4>
        </NavLink>
        <NavLink
          to='/landing'
          className='user logout'
          onClick={() => {
            dispatch(clearStore('Logout Successfully'))
            dispatch(toggleIsProfile())
          }}
        >
          <LuLogOut />
          <h4>Logout</h4>
        </NavLink>
      </div>
    </Wrapper>
  )
}
export default Profile
