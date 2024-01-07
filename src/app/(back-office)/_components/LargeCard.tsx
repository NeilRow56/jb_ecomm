import { Layers } from 'lucide-react'
import React from 'react'

type LargeCardProps = {
  period: string
  orders?: number
  sales?: number
  color: string
}

const LargeCard = ({ period, orders, color, sales }: LargeCardProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg p-8 text-white shadow-md ${color}`}
    >
      <Layers />
      <h4>{period}</h4>
      <h2 className="text-2xl lg:text-3xl">
        £{orders}
        {sales}
      </h2>
    </div>
  )
}

export default LargeCard
