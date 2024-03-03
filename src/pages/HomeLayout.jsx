import { Outlet } from 'react-router-dom'
import SmallNavbar from '../components/SmallNavbar'
import BigNavbar from '../components/BigNavbar'
import Navbar from '../components/Navbar'
import { Wrapper } from '../assets/wrappers/HomeLayout'
import { useSelector } from 'react-redux'
const HomeLayout = () => {
  const { isSideBarOpen } = useSelector((store) => store.user)

  return (
    <>
      <Navbar />
      <BigNavbar />
      <SmallNavbar />
      <Wrapper>
        <main className={isSideBarOpen ? 'active' : ''}>
          <Outlet />
        </main>
      </Wrapper>
    </>
  )
}
export default HomeLayout
