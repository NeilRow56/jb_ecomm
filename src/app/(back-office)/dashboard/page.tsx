import Heading from '@/components/Heading'
import LargeCards from '../_components/LargeCards'
import SmallCards from '../_components/SmallCards'
import DashboardCharts from '../_components/DashboardCharts'

export default function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Table for Recent Orders */}
    </div>
  )
}
