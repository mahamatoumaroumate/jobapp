import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const AreaChart = ({ data }) => {
  return (
    <ResponsiveContainer height={300}>
      <LineChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='count'
          stroke={`var(--primary-color)`}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default AreaChart
