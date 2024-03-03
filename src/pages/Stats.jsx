import { Wrapper } from '../assets/wrappers/Stats'

import BigProfile from '../components/BigProfile'

import ChartContainer from '../components/ChartContainer'
import StatsContainer from '../components/StatsContainer'

const Stats = () => {
  return (
    <>
      <Wrapper>
        <div>
          <StatsContainer />
          <section style={{ background: 'white' }}>
            <BigProfile />
          </section>
        </div>
      </Wrapper>
      <ChartContainer />
    </>
  )
}
export default Stats
