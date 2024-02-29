"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

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
              className="h-5 w-5"
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
            <li>
              <Link href="/find">Find</Link>
            </li>
            <li>
              <Link href="/rate">Rate</Link>
            </li>
            <div className="divider" />
            {status === "authenticated" ? (
              <li>
                {session?.user?.name}
                <Link className="ml-3" href="/api/auth/signout">
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link className="mr-5" href="/api/auth/signin">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Link className="navbar-end btn btn-ghost text-xl" href="/">
        Full English
      </Link>
    </div>
  );
};

export default Header;
