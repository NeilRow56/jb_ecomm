import React from 'react'
import SmallCard from './SmallCard'
import { ShoppingCart } from 'lucide-react'

type Props = {}

const orderData = [
  {
    title: 'Total orders',
    orders: 552,
    color: 'bg-orange-800',
  },
  {
    title: 'Orders pending',
    orders: 185,
    color: 'bg-blue-800',
  },
  {
    title: 'Orders Processing',
    sales: 45,
    color: 'bg-teal-800',
  },
  {
    title: 'Orders delivered',
    sales: 306,
    color: 'bg-green-800',
  },
]

const SmallCards = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-4 ">
      {/* Card */}
      {orderData.map((item, i) => (
        <SmallCard
          title={item.title}
          orders={item.orders}
          sales={item.sales}
          color={item.color}
          key={1}
        />
      ))}
    </div>
  )
}

export default SmallCards
