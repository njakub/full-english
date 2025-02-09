"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            {status === "authenticated" && (
              <>
                <li>
                  <Link href="/find">Find</Link>
                </li>
                <li>
                  <Link href="/review">Review</Link>
                </li>
              </>
            )}
            <div className="divider" />
            {status === "authenticated" ? (
              <>
                <li>
                  <Link href="/profile">{session?.user?.name}</Link>
                </li>
                <li>
                  <Link href="/api/auth/signout">Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link href="/api/auth/signin">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Link className="navbar-end" href="/">
        <Image src="/FullEnglishLogo.png" alt="Logo" width={150} height={150} />
      </Link>
    </div>
  );
};

export default Header;
