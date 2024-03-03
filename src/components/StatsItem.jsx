import { Wrapper } from '../assets/wrappers/StatsItem'

const StatsItem = ({ id, title, color, bcg, icon, count }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <section key={id} className='stats'>
        <div className='icon-container'>
          <h1>{count}</h1>
          <span>{icon}</span>
        </div>
        <h2>{title}</h2>
      </section>
    </Wrapper>
  )
}
export default StatsItem
