'use server'

import { parseWithZod } from '@conform-to/zod'

import { onboardingSchema } from '@/app/utils/zodSchema'
import { redirect } from 'next/navigation'
import db from '@/lib/db'

import { auth } from './utils/auth'

export async function onboardUser(prevState: any, formData: FormData) {
  //Get the currently authenticated user
  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    throw new Error('Unauthenticated')
  }

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
