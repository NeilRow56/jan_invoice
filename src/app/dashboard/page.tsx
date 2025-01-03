import React from 'react'

import { Metadata } from 'next'
import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default async function DashboardPage() {
  //Redirect non-admin users

  const session = await getSession()
  const user = session?.user

  if (!user) {
    redirect('/login')
  }
  return <div className=''>Dashboard</div>
}
