import { Logo } from '@/components/shared/Logo'
import Menu from '@/components/shared/Menu'
import Navbar from '@/components/shared/Navbar'
import db from '@/lib/db'
import { requireUser } from '@/lib/requireUser'
import { File } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

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

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await requireUser()
  const data = await getUser(session.user?.id as string)
  return (
    <div className='flex h-screen'>
      {/* LEFT */}
      <div className='w-[14%] p-4 dark:bg-slate-800 md:w-[8%] lg:w-[20%] xl:w-[14%]'>
        <Link
          href='/'
          className='flex items-center justify-center gap-2 lg:justify-start'
        >
          <File className='stroke h-8 w-8 stroke-amber-500 stroke-[1.5] lg:hidden' />
          <span className='hidden font-bold lg:block'>
            <Logo />
          </span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className='flex w-[86%] flex-col overflow-scroll md:w-[92%] lg:w-[80%] xl:w-[86%]'>
        <Navbar />
        <main className='flex flex-1 flex-col gap-4 bg-slate-50 p-4 dark:bg-slate-900 lg:gap-6 lg:p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}
