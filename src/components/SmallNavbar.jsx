import { useDispatch, useSelector } from 'react-redux'
import { Wrapper } from '../assets/wrappers/SmallNavbar'
import { FaTimes } from 'react-icons/fa'
import { toggleSideBar } from '../features/user/userSlice'
import logo from '../assets/icon-small.png'
import { links } from '../utils/data'
import { NavLink } from 'react-router-dom'
const SmallNavbar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  return (
    <Wrapper className={isSideBarOpen ? 'active' : ''}>
      <main>
        <button className='btn-close' onClick={() => dispatch(toggleSideBar())}>
          <FaTimes />
        </button>
        <section className='section-center'>
          <div className='logo-container'>
            <img src={logo} alt='logo' />
            <h1>Jobster</h1>
          </div>
          <div className='links-container'>
            <section>
              {links.map((link) => {
                return (
                  <NavLink
                    className='link'
                    to={`${link.url}`}
                    key={link.id}
                    onClick={() => dispatch(toggleSideBar())}
                  >
                    <button className='btn'>{link.icon}</button>
                    <h4 className='text'>{link.text}</h4>
                  </NavLink>
                )
              })}
            </section>
          </div>
        </section>
      </main>
    </Wrapper>
  )
}
export default SmallNavbar
