import { Wrapper } from '../assets/wrappers/BigNavbar'
import { useSelector } from 'react-redux'
import logo from '../assets/icon-small.png'
import { links } from '../utils/data'
import { NavLink } from 'react-router-dom'
const BigNavbar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user)
  return (
    <Wrapper>
      <main className={isSideBarOpen ? 'sidebar active' : 'sidebar '}>
        <div className='logo-container'>
          <img src={logo} alt='logo' />
          <h1>Jobster</h1>
        </div>
        <div className='links-container'>
          <section>
            {links.map((link) => {
              return (
                <NavLink className='link' to={`${link.url}`} key={link.id}>
                  <button className='btn'>{link.icon}</button>
                  <h4 className='text'>{link.text}</h4>
                </NavLink>
              )
            })}
          </section>
        </div>
      </main>
    </Wrapper>
  )
}
export default BigNavbar
