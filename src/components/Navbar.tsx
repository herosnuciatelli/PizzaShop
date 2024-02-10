'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from 'next/link'


import {
  HomeIcon,
  PizzaIcon,
  UtensilsCrossedIcon,
  ChevronDownIcon,
  LogOutIcon,
} from "lucide-react";
import { Label } from "@/components/ui/label";

import clsx from "clsx";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { Menu } from "./Menu";
import { DialogContentReady } from "./ui/dialog-content-ready";

export function Navbar() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const pathname = usePathname();

  function handleMenuOpen() {
    if (menuIsOpen) {
      return setMenuIsOpen(false)
    }
    return setMenuIsOpen(true)
  }

  return (
    <div>
      <div className="flex justify-between items-center px-10 py-5 border-b border-b-zinc-800 ">
        <div className="flex gap-10 items-end">
          <div>
            <PizzaIcon />
          </div>
          <div className="hidden sm:block">
            <ul className="flex gap-7">
              <Link href="/">
                <li className={clsx('flex gap-1 text-sm items-end cursor-pointer hover:text-white',
                  {
                    'text-white': pathname == '/',
                    'text-zinc-300': pathname != '/'
                  }
                )}>
                  <HomeIcon className="w-4" /> Home
                </li>
              </Link>
              <Link href="/Orders">
                <li className={clsx('flex gap-1 text-sm items-end cursor-pointer hover:text-white',
                  {
                    'text-white': pathname == '/Orders',
                    'text-zinc-300': pathname != '/Orders'
                  }
                )}>
                  <UtensilsCrossedIcon className="w-4" /> Orders
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="hidden sm:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent hover:bg-zinc-800 border border-zinc-800 text-zinc-300">
                Pizza Shop <ChevronDownIcon className="w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-zinc-950 border-zinc-800 text-zinc-300">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-800" />
              <DropdownMenuItem
                className="focus:bg-zinc-800 focus:text-zinc-300"
                asChild
              >
                <Dialog>
                  <DialogTrigger className="hover:bg-zinc-800 text-zinc-300 w-full text-left bg-transparent rounded px-2 py-1.5 text-sm">
                    Profile
                  </DialogTrigger>
                  <DialogContentReady />
                </Dialog>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 text-red-500 focus:bg-zinc-800 focus:text-red-500">
                <LogOutIcon className="w-4" /> Sing Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div
          className="sm:hidden p-2 border h-9 border-zinc-800 rounded grid place-items-center  relative"
          onClick={() => handleMenuOpen()}
        >
          <div className="flex flex-col gap-1.5">
            <div className={clsx("w-5 h-[1px] bg-zinc-500 rounded transition-transform", {
              'transform rotate-45 absolute': menuIsOpen == true
            })}></div>
            <div className={clsx("w-5 h-[1px] bg-zinc-500 rounded transition-opacity", {
              'opacity-0': menuIsOpen == true
            })}></div>
            <div className={clsx("w-5 h-[1px] bg-zinc-500 rounded transition-transform", {
              'transform -rotate-45 absolute': menuIsOpen == true
            })}></div>
          </div>
        </div>
      </div>
      { menuIsOpen && (
          <Menu />
        )}
    </div>
  );
}
