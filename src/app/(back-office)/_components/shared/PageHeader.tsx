import Heading from '@/components/Heading'
import { Button } from '@/components/ui/button'
import { Pencil, Plus, Trash2, Upload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SearchBar from './Search'

type PageHeaderProps = {
  title: string
  linkTitle: string
  href: string
}

const PageHeader = ({ title, linkTitle, href }: PageHeaderProps) => {
  return (
    <div className=" flex w-full flex-col ">
      <div className="mb-8">
        <Heading title={title} />
      </div>
      <div className="container flex items-center justify-between rounded-lg bg-slate-200 px-12 py-2 dark:bg-slate-800">
        <Button className="border border-green-500 bg-purple-800 text-slate-300">
          <span className="flex items-center gap-4 ">
            <Upload />
            Export
          </span>
        </Button>
        <SearchBar />
        <div className="flex gap-4">
          {/* <Button variant="default" className="text-slate-900">
            <span className="flex items-center gap-4 ">
              <Pencil className="h-4 w-4 text-slate-400" />
              Bulk Action
            </span>
          </Button> */}
          <Button variant="destructive" className="text-slate-300">
            <span className="flex items-center gap-4 ">
              <Trash2 />
              Bulk Delete
            </span>
          </Button>
          <Button
            asChild
            className="bg-green-600 text-slate-100 hover:bg-green-600/75"
          >
            <span className="flex gap-4">
              <Plus />
              <Link href={href}>{linkTitle}</Link>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
