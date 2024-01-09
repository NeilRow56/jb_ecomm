import { Bell, Layout, LogOut, Menu, Settings, Sun, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ModeToggle } from './ModeToggle'
import { Logo } from './Logo'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className=" fixed top-0 flex  h-16 w-full items-center justify-between  overflow-hidden border-2 border-slate-600 bg-slate-200 px-24 py-4 text-slate-50 dark:bg-slate-800">
      <div className="flex">
        <Logo />
      </div>
      <div className="flex w-full pl-24">
        <button>
          <Menu className="text-slate-800 dark:text-slate-100" />
        </button>
      </div>
      <div className="flex space-x-8">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center">
              <Bell className="text-slate-800 dark:text-lime-500" />

              <span className="absolute right-[187px] top-[6px] flex h-5 w-5 items-center justify-center rounded-full bg-red-700 text-sm text-white">
                5
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[350px] px-4 py-2 pr-4 text-slate-200 dark:bg-slate-800">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className=" flex  items-center">
                <div className="flex w-8">
                  <Layout className=" h-4 w-4" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs">Sam Sweet placed £300 order</span>
                  <div className="flex flex-row">
                    <Badge className="w-[85px] items-center bg-red-600 px-1  text-xs">
                      <span className="flex w-full ">Out of Stock</span>
                    </Badge>
                    <h6 className=" pl-2 pt-[3px] text-xs text-slate-200">
                      12 Dec 2023 - 12:40pm
                    </h6>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className=" flex w-full items-center">
                <div className="flex w-8">
                  <Image
                    src="/profile.jpg"
                    width={200}
                    height={200}
                    className="h-5 w-5  rounded-full"
                    alt="profile picture"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">Sam Sweet placed £300 order</span>
                  <div className="flex flex-row">
                    <Badge className="w-[85px] items-center bg-green-600 px-1 text-center  text-xs">
                      <span className="flex w-full ">In Stock</span>
                    </Badge>
                    <h6 className="w-full pl-2 pt-[3px] text-xs text-slate-200">
                      12 Dec 2023 - 12:40pm
                    </h6>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className=" flex  items-center">
                <div className="flex w-8">
                  <Layout className=" h-4 w-4" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs">Sam Sweet placed £300 order</span>
                  <div className="flex flex-row">
                    <Badge className="w-[85px] items-center bg-red-600 px-1  text-xs">
                      <span className="flex w-full ">Out of Stock</span>
                    </Badge>
                    <h6 className="pl-2 pt-[3px] text-xs text-slate-200">
                      Dashboard
                    </h6>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className=" flex items-center">
                <div className="flex w-8">
                  <Layout className=" h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">Sam Sweet placed £300 order</span>
                  <div className="flex flex-row">
                    <Badge className="w-[85px] items-center bg-green-600 px-1 text-center  text-xs">
                      <span className="flex w-full ">In Stock</span>
                    </Badge>
                    <h6 className="pl-2 pt-[3px] text-xs text-slate-200">
                      Dashboard
                    </h6>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenuSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              className="h-8 w-8 rounded-full"
              alt="profile picture"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2 pr-4">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer ">
              <Layout className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar
