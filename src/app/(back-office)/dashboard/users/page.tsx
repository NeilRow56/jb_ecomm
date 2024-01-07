import React from 'react'
import { User, columns } from './_components/Columns'
import { DataTable } from '@/components/DataTable'

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()

  return data
}

export default async function UsersPage() {
  const data = await getUsers()

  return (
    <section className="9y-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}
