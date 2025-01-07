'use server'

import { parseWithZod } from '@conform-to/zod'

import { invoiceSchema, onboardingSchema } from '@/app/utils/zodSchema'
import { redirect } from 'next/navigation'
import db from '@/lib/db'
import { requireUser } from '@/lib/requireUser'

export async function onboardUser(prevState: any, formData: FormData) {
  //Get the currently authenticated user
  const session = await requireUser()

  const submission = parseWithZod(formData, {
    schema: onboardingSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const data = await db.user.update({
    where: {
      id: session.user?.id
    },
    data: {
      firstName: submission.value.firstName,
      lastName: submission.value.lastName,
      address: submission.value.address
    }
  })

  return redirect('/dashboard')
}

export async function createInvoice(prevState: any, formData: FormData) {
  const session = await requireUser()

  const submission = parseWithZod(formData, {
    schema: invoiceSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const data = await db.invoice.create({
    data: {
      clientAddress: submission.value.clientAddress,
      clientEmail: submission.value.clientEmail,
      clientName: submission.value.clientName,
      currency: submission.value.currency,
      date: submission.value.date,
      dueDate: submission.value.dueDate,
      fromAddress: submission.value.fromAddress,
      fromEmail: submission.value.fromEmail,
      fromName: submission.value.fromName,
      invoiceItemDescription: submission.value.invoiceItemDescription,
      invoiceItemQuantity: submission.value.invoiceItemQuantity,
      invoiceItemRate: submission.value.invoiceItemRate,
      invoiceName: submission.value.invoiceName,
      invoiceNumber: submission.value.invoiceNumber,
      status: submission.value.status,
      total: submission.value.total,
      note: submission.value.note,
      userId: session.user?.id
    }
  })

  return redirect('/dashboard/invoices')
}
