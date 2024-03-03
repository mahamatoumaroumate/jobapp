import { MdOutlineQueryStats } from 'react-icons/md'
import { FaRegChartBar } from 'react-icons/fa'

import { IoCalendar } from 'react-icons/io5'
export const links = [
  {
    id: 1,
    icon: <MdOutlineQueryStats />,
    url: '/',
    text: 'Stats',
  },
  {
    id: 2,
    icon: <FaRegChartBar />,
    url: '/all-job',
    text: 'All Jobs',
  },
  {
    id: 3,
    icon: <IoCalendar />,
    url: '/add-job',
    text: 'Add Job',
  },
]
