import { File, PiggyBank } from 'lucide-react'

export const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <File className='stroke h-8 w-8 stroke-amber-500 stroke-[1.5]' />
      <span className='bg-gradient-to-r from-amber-400 to-orange-800 bg-clip-text text-xl font-bold leading-tight tracking-tighter text-transparent'>
        InvoiceMarshal
      </span>
    </div>
  )
}
