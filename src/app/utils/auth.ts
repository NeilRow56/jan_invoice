import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Adapter } from 'next-auth/adapters'
import Resend from 'next-auth/providers/resend'

import db from '@/lib/db'

export const { handlers, auth, signIn, signOut } = NextAuth({
  theme: {
    logo: '/logo.png'
  },
  adapter: PrismaAdapter(db) as Adapter,

  providers: [
    Resend({
      from: process.env.EMAIL_FROM
    })
  ],

  pages: {
    verifyRequest: '/verify'
  }
})
