import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductsChart from './BestSellingProductsChart'

type Props = {}

const DashboardCharts = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-8 text-white lg:grid-cols-2">
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  )
}

export default DashboardCharts
