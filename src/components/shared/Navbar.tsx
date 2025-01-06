'use client'

import { Button } from '../ui/button'

import { signIn, useSession } from 'next-auth/react'
import UserButton from './UserButton'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'

export default function Navbar() {
  const session = useSession()
  const user = session?.data?.user
  return (
    <header className='flex w-full items-center border-b-2 shadow-sm dark:bg-slate-800'>
      <div className='container mx-auto flex w-full items-center justify-between p-3'>
        <div className='flex w-full'></div>

        <div className='flex items-center gap-3'>
          {user && <UserButton user={user} />}
          {!user && session.status !== 'loading' && (
            <Button asChild>
              <Link href='/login'>Sign in</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>
}
