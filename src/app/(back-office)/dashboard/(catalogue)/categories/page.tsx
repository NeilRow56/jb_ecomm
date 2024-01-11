import PageHeader from '@/app/(back-office)/_components/shared/PageHeader'
import SearchBar from '@/app/(back-office)/_components/shared/Search'

export default function Categories() {
  return (
    <div className="space-y-5 pt-24 text-slate-900 dark:text-slate-300">
      {/* Header */}
      <PageHeader
        title="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />
      {/* Table   Actions    */}

      {/* Export || Search || Bulk Delete */}
      {/* <div className="container mt-8 flex justify-between rounded-lg bg-slate-200 px-12 py-2 dark:bg-slate-800 ">
        <SearchBar />
      </div> */}

      <h2 className="">Categories - Table</h2>
    </div>
  )
}
