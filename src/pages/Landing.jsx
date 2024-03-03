import { Link } from 'react-router-dom'
import img from '../assets/favicon.ico'
import hero from '../assets/home.svg'
import { Wrapper } from '../assets/wrappers/Landing'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={img} alt='jobster' />
        <h2>Jobster</h2>
      </nav>
      <div>
        <section>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to='/register'>Login/Register</Link>
        </section>
        <img src={hero} alt='' className='hero' />
      </div>
    </Wrapper>
  )
}
export default Landing
