import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full ">
        {/* Header */}
        <Navbar />
        <main className="ml-0 min-h-screen flex-grow bg-slate-100  p-8 text-slate-50 lg:ml-60 dark:bg-slate-900">
          {children}
        </main>
      </div>
    </div>
  )
}
