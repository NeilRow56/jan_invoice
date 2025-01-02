import { SubmitButton } from '@/components/shared/SubmitButton'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { signIn } from '../utils/auth'

export default function LoginPage() {
  return (
    <>
      <div className='flex h-screen w-full items-center justify-center px-4'>
        <Card className='max-w-sm'>
          <CardHeader>
            <CardTitle className='text-2xl'>Login 🔓 </CardTitle>
            <CardDescription>
              Enter your email below to login in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className='flex flex-col gap-y-4'
              action={async formData => {
                'use server'
                await signIn('resend', formData)
              }}
            >
              <div className='flex flex-col gap-y-2'>
                <Label htmlFor='email'>Email </Label>
                <Input
                  name='email'
                  type='email'
                  required
                  placeholder='hello@example.com'
                />
              </div>
              <SubmitButton text='Login' />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
