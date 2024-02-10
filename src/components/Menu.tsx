import clsx from "clsx";
import { HomeIcon, LogOutIcon, UtensilsCrossedIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { DialogContentReady } from "./ui/dialog-content-ready";

export function Menu() {

  const pathname = usePathname();

  return (
    <div className="border-b absolute bg-slate-950 sm:hidden px-10 py-5 border-t-zinc-800 w-full z-10">
      <div className="sm:hidden">
        <ul className="flex flex-col gap-7">
          <Link href="/">
            <li className={clsx('flex gap-2 text-md items-end cursor-pointer hover:text-white',
              {
                'text-white': pathname == '/',
                'text-zinc-300': pathname != '/'
              }
            )}>
              <HomeIcon className="w-4" /> Home
            </li>
          </Link>
          <Link href="/Orders">
            <li className={clsx('flex gap-2 text-md items-end cursor-pointer hover:text-white',
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
      <div className="border-t border-t-zinc-800 mt-5 py-5 flex flex-col gap-8">
        <h2 className="text-lg font-bold text-zinc-300">My Account</h2>
        <div className="flex flex-col gap-7">
          <Dialog>
            <DialogTrigger className="text-zinc-300 text-left text-md">
              Profile
            </DialogTrigger>
            <DialogContentReady />
          </Dialog>
          <span className="flex gap-2 text-red-500 focus:bg-zinc-800 focus:text-red-500 cursor-pointer">
            <LogOutIcon className="w-4" /> Sing Out
          </span>
        </div>
      </div>
    </div>
  )
}