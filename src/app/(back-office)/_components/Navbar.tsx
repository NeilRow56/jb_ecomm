import { Bell, Menu, Sun, User } from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className=" fixed top-0  flex h-16 w-full items-center justify-between  bg-slate-800 px-10 py-4 text-slate-50">
      <div className="flex">
        <button>
          <Menu />
        </button>
      </div>
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  )
}

export default Navbar
