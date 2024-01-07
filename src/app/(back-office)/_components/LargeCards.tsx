import React from 'react'
import LargeCard from './LargeCard'

type Props = {}

const orderStats = [
  {
    period: 'Today - orders',
    orders: 110000,

    color: 'bg-teal-600',
  },
  {
    period: 'Yesterday - orders',
    orders: 85000,
    color: 'bg-blue-600',
  },
  {
    period: 'This month',
    sales: 288500,
    color: 'bg-orange-600',
  },
  {
    period: 'Year todate',
    sales: 865240,
    color: 'bg-purple-600',
  },
  {
    period: 'All-Time sales',
    sales: 4865240,
    color: 'bg-yellow-600',
  },
]

const LargeCards = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 ">
      {/* Card */}
      {orderStats.map((item, i) => (
        <LargeCard
          period={item.period}
          orders={item.orders}
          sales={item.sales}
          color={item.color}
          key={1}
        />
      ))}
    </div>
  )
}

export default LargeCards
