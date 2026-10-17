"use client";

import Image from "next/image";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { authClient } from "@/lib/auth-client";
import MiddleNav from "./MiddleNav";
import { HiOutlineLogout } from "react-icons/hi";
import { useRouter } from "next/router";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user
  // logout function
  const handleLogOut = async () : Promise<void>=>{
    try{
     await authClient.signOut();
     window.location.href="/"
    }
    catch (error: unknown) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/pmalogo.png"
            width={65}
            height={65}
            alt="Poster Maker AI"
            priority
            className="h-14 w-14 object-contain"
          />
        </Link>


        {/* midddle content */}
        <div className="hidden lg:block">
          <MiddleNav />
        </div>


        {
          user ?

            <div>
              <p>{user.name}</p>

              <button onClick={()=>{handleLogOut()}}>
                <HiOutlineLogout />
              </button>
            </div>


            :
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <Link href="/login" className="rounded-lg shadow px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:from-blue-700 hover:to-cyan-500 hover:shadow-md"
              >
                Register
              </Link>

            </div>
        }


        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen((pre) => !pre)}
            className="text-2xl">
            {
              isOpen ? <RxCross2 /> : <GiHamburgerMenu />
            }
          </button>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;