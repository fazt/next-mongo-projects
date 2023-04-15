"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const { data } = useSession();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        {data?.user ? (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>Hello {data.user.name}</li>
            <li
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
