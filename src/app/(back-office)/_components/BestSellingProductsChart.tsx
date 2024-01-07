'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

type Props = {}

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Green Leaf Lettuce', 'Rainbow Chard', 'Bannanas', 'Parsley'],

  datasets: [
    {
      label: 'Sold last week',

      data: [12, 19, 13, 15],
      backgroundColor: [
        'rgba(255, 0, 0, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderColor: [
        'rgba(224, 224, 224, 1)',
        'rgba(224, 224, 224, 1)',
        'rgba(224, 224, 224, 1)',
        'rgba(224, 224, 224, 1)',
      ],
      borderWidth: 2,
    },
  ],
}

const BestSellingProductsChart = (props: Props) => {
  return (
    <div className="mx-auto w-2/3 rounded-lg bg-slate-700 p-4">
      <h2 className="text-xl font-bold">Best Selling Products Chart</h2>
      {/* Chart */}
      <Pie data={data} />
    </div>
  )
}

export default BestSellingProductsChart
