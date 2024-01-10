'use client'

import {
  ArrowDown,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const catelogueLinks = [
  {
    label: 'Attributes',
    icon: <User className="mr-2 h-6 w-6" />,
    href: '/dashboard/attributes',
  },
  {
    label: 'Banners',
    icon: <User className="mr-2 h-6 w-6" />,
    href: '/dashboard/banners',
  },
  {
    label: 'Categories',
    icon: <User className="mr-2 h-6 w-6" />,
    href: '/dashboard/categories',
  },
  {
    label: 'Coupons',
    icon: <User className="mr-2 h-6 w-6" />,
    href: '/dashboard/coupons',
  },
  {
    label: 'Products',
    icon: <User className="mr-2 h-6 w-6" />,
    href: '/dashboard/products',
  },
]

export function DropdownMenuCat() {
  const pathname = usePathname()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-green-600 px-8 text-slate-100">
          <span className="flex gap-4">
            <h4>Catalogue</h4>

            <ArrowDown />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-slate-500">
        <DropdownMenuLabel className="text-slate-200">
          Select a category
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {catelogueLinks.map((item, i) => (
            <DropdownMenuItem key={item.href}>
              <span
                className={
                  pathname === item.href
                    ? 'flex items-center space-x-3 border-lime-500 py-1 text-sm text-lime-500'
                    : 'flex items-center space-x-3 py-1'
                }
              >
                {item.icon}
                <Link href={item.href}>{item.label}</Link>
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
