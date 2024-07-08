'use client';

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {

  return (
    <div className='flex bg-slate-200 p-3 space-x-3'>
      <Link href="/" className='mr-5'>Next.js</Link>
      <Link href="/users">Users</Link>
        <div>
          <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
        </div>
    </div>
  )
}

export default NavBar