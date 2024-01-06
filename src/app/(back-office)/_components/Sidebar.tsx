import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className=" fixed left-0 top-16 min-h-screen w-60 space-y-6 bg-slate-700 p-3 text-slate-50">
      <Link className="mb-6 " href="#">
        Logo
      </Link>
      <div className="flex flex-col space-y-8">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Our Staff</Link>
        <Link href="#">Settings</Link>
      </div>
    </div>
  )
}

export default Sidebar
