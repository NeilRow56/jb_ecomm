import Heading from '@/components/Heading'
import LargeCards from '../_components/LargeCards'
import SmallCards from '../_components/SmallCards'
import DashboardCharts from '../_components/DashboardCharts'
import { DataTable } from '@/components/DataTable'
import { User, columns } from './_components/Columns'

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()

  return data
}

export default async function Dashboard() {
  const data = await getUsers()
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

      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">All Users</h1>
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </div>
  )
}
