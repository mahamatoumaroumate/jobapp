import StatsItem from '../components/StatsItem'
import { useSelector } from 'react-redux'
import { FaSuitcase } from 'react-icons/fa6'
import { FaBug } from 'react-icons/fa6'
import { FaCalendarCheck } from 'react-icons/fa6'
const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs)
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats?.pending || 0,
      icon: <FaSuitcase />,
      color: '#14b8a6',
      bcg: '#99f6e4',
      id: 1,
    },
    {
      title: 'interviews scheduled',
      count: stats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#ec4899',
      bcg: '#f9a8d4',
      id: 2,
    },
    {
      title: 'jobs declined',
      count: stats?.declined || 0,
      icon: <FaBug />,
      color: '#a855f7',
      bcg: '#d8b4fe',
      id: 3,
    },
  ]
  return (
    <>
      {defaultStats.map((item) => {
        return <StatsItem key={item.id} {...item} />
      })}
    </>
  )
}
export default StatsContainer
