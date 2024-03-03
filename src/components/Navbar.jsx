import { Wrapper } from '../assets/wrappers/Navbar'
import logo from '../assets/icon-small.png'
import { RiMenu5Line } from 'react-icons/ri'
import profile from '../assets/profile.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsProfile, toggleSideBar } from '../features/user/userSlice'
import Profile from './Profile'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isSideBarOpen, user, isProfile } = useSelector((store) => store.user)

  return (
    <Wrapper>
      {isProfile && <Profile />}
      <nav className={isSideBarOpen ? 'nav active' : 'nav'}>
        <button
          className='btn-toggle'
          onClick={() => dispatch(toggleSideBar())}
        >
          <RiMenu5Line />
        </button>
        <div className='logo-container'>
          <img src={logo} alt='logo' />
          <h2>Jopster</h2>
        </div>
        <div className='dashboard'>
          <h1>Dashboard</h1>
        </div>
        <div className='profile'>
          <h2>{user?.user?.name || ''}</h2>
          <img
            src={profile}
            alt='profile'
            className='profile-img'
            onClick={() => dispatch(toggleIsProfile())}
          />
        </div>
      </nav>
    </Wrapper>
  )
}
export default Navbar
