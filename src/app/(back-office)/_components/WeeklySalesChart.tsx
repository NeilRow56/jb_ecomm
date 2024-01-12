'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { faker } from '@faker-js/faker'
import { Line, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
}

const data2 = {
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Props = {}

const WeeklySalesChart = (props: Props) => {
  return (
    <Tabs defaultValue="account" className="mx-auto w-2/3 pt-24">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Sales</TabsTrigger>
        <TabsTrigger value="password">Orders</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className=" w-full rounded-lg p-4 dark:bg-slate-700">
          <h2 className="text-xl font-bold text-blue-800 dark:text-slate-800">
            Weekly Sales Chart
          </h2>
          {/* Chart */}
          <Line options={options} data={data} />
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className=" w-full rounded-lg bg-slate-200 p-4 text-slate-800 dark:bg-slate-700 dark:text-slate-100">
          <h2 className="text-xl font-bold">Best Selling Products Chart</h2>
          {/* Chart */}
          <Pie data={data2} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default WeeklySalesChart
