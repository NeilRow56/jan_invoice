import { CreateInvoiceForm } from '@/components/invoices/CreateInvoiceForm'

import db from '@/lib/db'
import { requireUser } from '@/lib/requireUser'
import React from 'react'

async function getUserData(userId: string) {
  const data = await db.user.findUnique({
    where: {
      id: userId
    },
    select: {
      firstName: true,
      lastName: true,
      address: true,
      email: true
    }
  })

  return data
}

export default async function CreateInvoicePage() {
  const session = await requireUser()
  const data = await getUserData(session.user?.id as string)
  return (
    <div>
      <CreateInvoiceForm
        lastName={data?.lastName as string}
        address={data?.address as string}
        email={data?.email as string}
        firstName={data?.firstName as string}
      />
    </div>
  )
}
