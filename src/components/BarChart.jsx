import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const BarChartItem = ({ data }) => {
  return (
    <ResponsiveContainer height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='count' fill={`var(--primary-color)`} barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default BarChartItem
