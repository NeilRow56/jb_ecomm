import React from 'react'
import LargeCard from './LargCard'

type Props = {}

const LargeCards = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-4 ">
      {/* Card */}
      <LargeCard className="bg-teal-600" />
      <LargeCard className="bg-blue-600" />
      <LargeCard className="bg-orange-600" />
      <LargeCard className="bg-purple-600" />
    </div>
  )
}

export default LargeCards
