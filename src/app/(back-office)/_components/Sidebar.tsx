'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Folders,
  LayoutGrid,
  LogOut,
  PersonStanding,
  Settings,
  ShoppingCart,
  Slack,
  Tractor,
  User2,
  Users2,
  Warehouse,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const routes = [
  {
    label: 'Customers',
    icon: <Users2 className="mr-2 h-6 w-6" />,
    href: '/dashboard/customers',
  },
  {
    label: 'Markets',
    icon: <Warehouse className="mr-2 h-6 w-6" />,
    href: '/dashboard/markets',
  },
  {
    label: 'Farmers',
    icon: <Tractor className="mr-2 h-6 w-6" />,
    href: '/dashboard/farmers',
  },
  {
    label: 'Orders',
    icon: <Folders className="mr-2 h-6 w-6" />,
    href: '/dashboard/orders',
  },
  {
    label: 'Staff',
    icon: <PersonStanding className="mr-2 h-6 w-6" />,
    href: '/dashboard/staff',
  },
  {
    label: 'Settings',
    icon: <Settings className="mr-2 h-6 w-6" />,
    href: '/dashboard/settings',
  },
  {
    label: 'Online Store',
    icon: <ShoppingCart className="mr-2 h-6 w-6" />,
    href: '/dashboard/online_store',
  },
]

type Props = {}

const Sidebar = (props: Props) => {
  const pathName = usePathname()
  return (
    <div className=" fixed left-0 min-h-screen w-60 space-y-6 bg-slate-200  pt-24 text-slate-800  dark:bg-slate-700 dark:text-slate-100">
      <div className="flex flex-col space-y-8">
        <Link
          href="/dashboard"
          className={cn(
            'flex items-center space-x-3 px-6 py-2',
            pathName === '/dashboard' && 'border-l-4 border-green-600'
          )}
        >
          <span
            className={cn(
              'flex gap-4',
              pathName === '/dashboard' && 'text-green-600'
            )}
          >
            <LayoutGrid />
            Dashboard
          </span>
        </Link>
        <Link href="#" className="flex items-center space-x-3  px-6 py-2">
          <span className="flex gap-4">
            <Slack />
            Catalogue
          </span>
        </Link>
        {routes.map((route, i) => (
          <Link
            key={i}
            href={route.href}
            className={cn(
              'flex items-center space-x-3 px-6 py-2',
              pathName === route.href && 'border-l-4 border-green-600'
            )}
          >
            <span
              className={cn(
                'flex gap-4',
                pathName === route.href && 'text-green-600'
              )}
            >
              {route.icon}
              {route.label}
            </span>
          </Link>
        ))}

        <Button className="fixed bottom-3 ml-5 w-48 items-center bg-green-600 dark:text-slate-100">
          <span className="flex gap-4">
            <LogOut />
            Logout
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
