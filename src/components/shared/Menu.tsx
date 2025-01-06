'use client'

import { role } from '@/lib/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/home.png',
        label: 'Home',
        href: '/',
        visible: ['admin', 'manager', 'staff']
      },
      {
        icon: '/subject.png',
        label: 'Dashboard',
        href: '/dashboard',
        visible: ['admin', 'manager']
      },
      {
        icon: '/singleClass.png',
        label: 'Invoices',
        href: '/dashboard/invoices',
        visible: ['admin', 'manager']
      }

      //   {
      //     icon: '/class.png',
      //     label: 'Clients',
      //     href: '/list/clients',
      //     visible: ['admin', 'manager', 'staff']
      //   },
      //   {
      //     icon: '/lesson.png',
      //     label: 'Working papers',
      //     href: '/list/workingPapersFile',
      //     visible: ['admin', 'manager', 'staff']
      //   },
      //   {
      //     icon: '/exam.png',
      //     label: 'File sections',
      //     href: '/list/fileSections',
      //     visible: ['admin', 'manager', 'staff']
      //   },
      //   {
      //     icon: '/calendar.png',
      //     label: 'Events',
      //     href: '/list/events',
      //     visible: ['admin', 'manager', 'staff']
      //   },
      //   {
      //     icon: '/message.png',
      //     label: 'Messages',
      //     href: '/list/messages',
      //     visible: ['admin', 'manager', 'staff']
      //   },
      //   {
      //     icon: '/announcement.png',
      //     label: 'Announcements',
      //     href: '/list/announcements',
      //     visible: ['admin', 'manager', 'staff']
      //   }
    ]
  }
  //   {
  //     title: 'OTHER',
  //     items: [
  //       {
  //         icon: '/profile.png',
  //         label: 'Profile',
  //         href: '/profile',
  //         visible: ['admin', 'manager', 'staff']
  //       },
  //       {
  //         icon: '/setting.png',
  //         label: 'Settings',
  //         href: '/settings',
  //         visible: ['admin', 'manager', 'staff']
  //       },
  //       {
  //         icon: '/logout.png',
  //         label: 'Logout',
  //         href: '/logout',
  //         visible: ['admin', 'manager', 'staff']
  //       }
  //     ]
  //   }
]

const Menu = () => {
  const pathname = usePathname()
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map(navItem => (
        <div className='flex flex-col gap-2' key={navItem.title}>
          <span className='my-4 hidden font-bold text-primary lg:block'>
            {navItem.title}
          </span>
          {navItem.items.map(item => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={cn(
                    pathname === item.href
                      ? 'bg-primary/10 font-bold text-primary'
                      : 'font-bold text-muted-foreground',
                    'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-blue-100 hover:text-green-600'
                  )}
                >
                  <Image src={item.icon} alt='' width={20} height={20} />
                  <span className='hidden lg:block'>{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu
