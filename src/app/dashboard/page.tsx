import React from 'react'

import { Metadata } from 'next'
import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'
import db from '@/lib/db'

export const metadata: Metadata = {
  title: 'Dashboard'
}

// Check if onboarding complete
async function getUser(userId: string) {
  const data = await db.user.findUnique({
    where: {
      id: userId
    },
    select: {
      firstName: true,
      lastName: true,
      address: true
    }
  })

  if (!data?.firstName || !data.lastName || !data.address) {
    redirect('/onboarding')
  }
}
export default async function DashboardPage() {
  //Redirect non-admin users

  // const session = await auth()

  // if (!session?.user) {
  //   redirect('/login')
  // }

  const session = await getSession()
  const user = session?.user

  if (!user) {
    redirect('/api/auth/signin?callbackUrl=/dashboard')
  }

  // if (user.role !== 'admin') {
  //   return (
  //     <main className='mx-auto my-10'>
  //       <p className='text-center'>You are not authorized to view this page</p>
  //     </main>
  //   )
  // }

  const data = await getUser(session.user?.id as string)

  return <div className=''>Dashboard</div>
}
