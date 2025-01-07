import { InvoiceList } from '@/components/invoices/InvoiceList'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import getSession from '@/lib/getSession'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

export default async function InvoicesPage() {
  //Redirect non-admin users

  const session = await getSession()
  const user = session?.user

  if (!user) {
    redirect('/login')
  }
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle className='text-2xl font-bold'>Invoices</CardTitle>
            <CardDescription>Manage your invoices right here</CardDescription>
          </div>
          <Link
            href='/dashboard/invoices/createInvoice'
            className={buttonVariants()}
          >
            <PlusIcon /> Create Invoice
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<Skeleton className='h-[500px] w-full' />}>
          <InvoiceList />
        </Suspense>
      </CardContent>
    </Card>
  )
}
