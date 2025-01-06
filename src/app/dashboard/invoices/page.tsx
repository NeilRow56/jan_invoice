import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function InvoicesPage() {
  //Redirect non-admin users

  const session = await getSession()
  const user = session?.user

  if (!user) {
    redirect('/login')
  }
  return <div className=''>Invoices Page</div>
}
