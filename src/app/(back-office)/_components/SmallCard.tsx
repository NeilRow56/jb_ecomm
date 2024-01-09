import { ShoppingBasket } from 'lucide-react'
import React from 'react'

type SmallCardProps = {
  title: string
  orders?: number
  sales?: number
  color: string
}

const SmallCard = ({ title, orders, color, sales }: SmallCardProps) => {
  return (
    <div className="flex items-center  space-x-4 rounded-lg bg-slate-300 px-8 py-4 text-slate-800 shadow-md dark:bg-slate-800 dark:text-white">
      <ShoppingBasket
        className={`h-10 w-10 rounded-full p-2 text-lime-500 dark:text-yellow-600 ${color}`}
      />
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-gray-500">{title}</h4>
        <h2 className="text-lg lg:text-xl">
          £{orders}
          {sales}
        </h2>
      </div>
    </div>
  )
}

export default SmallCard
