import { cn } from '@/lib/utils'
import { Layers } from 'lucide-react'
import React from 'react'

type LargeCardProps = {
  className: string
}

const LargeCard = ({ className }: LargeCardProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg p-8 text-white shadow-md ${className}`}
    >
      <Layers />
      <h4>Today&apos;s orders</h4>
      <h2 className="text-2xl lg:text-3xl">£108.22</h2>
    </div>
  )
}

export default LargeCard
