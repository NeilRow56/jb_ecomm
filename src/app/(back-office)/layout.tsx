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
        <main className="ml-60 mt-16 min-h-screen  bg-slate-900 p-8 text-slate-50">
          {children}
        </main>
      </div>
    </div>
  )
}
