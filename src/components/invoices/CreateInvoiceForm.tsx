'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'

import { SubmitButton } from '../shared/SubmitButton'
import { formatCurrency } from '@/app/utils/formatCurrency'

export function CreateInvoiceForm() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [rate, setRate] = useState('')
  const [quantity, setQuantity] = useState('')
  const [currency, setCurrency] = useState('GBP')

  const calcualteTotal = (Number(quantity) || 0) * (Number(rate) || 0)

  return (
    <Card className='mx-auto w-full max-w-4xl'>
      <CardContent className='p-6'>
        <form>
          <div className='mb-6 flex w-fit flex-col gap-1'>
            <div className='flex items-center gap-4'>
              <Badge variant='secondary'>Draft</Badge>
              <Input placeholder='Test 123' />
            </div>
          </div>

          <div className='mb-6 grid gap-6 md:grid-cols-3'>
            <div>
              <Label>Invoice No.</Label>
              <div className='flex'>
                <span className='flex items-center rounded-l-md border border-r-0 bg-muted px-3'>
                  #
                </span>
                <Input className='rounded-l-none' placeholder='5' />
              </div>
            </div>

            <div>
              <Label>Currency</Label>
              <Select
                defaultValue='GBP'
                onValueChange={value => setCurrency(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder='Select Currency' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='USD'>UK Pound -- GBP</SelectItem>
                  <SelectItem value='EUR'>Euro -- EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='mb-6 grid gap-6 md:grid-cols-2'>
            <div>
              <Label>From</Label>
              <div className='space-y-2'>
                <Input placeholder='Your Name' />

                <Input placeholder='Your Email' />

                <Input placeholder='Your Address' />
              </div>
            </div>

            <div>
              <Label>To</Label>
              <div className='space-y-2'>
                <Input placeholder='Client Name' />

                <Input placeholder='Client Email' />

                <Input placeholder='Client Address' />
              </div>
            </div>
          </div>

          <div className='mb-6 grid gap-6 md:grid-cols-2'>
            <div>
              <div>
                <Label>Date</Label>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant='outline'
                    className='w-[280px] justify-start text-left'
                  >
                    <CalendarIcon />

                    {selectedDate ? (
                      new Intl.DateTimeFormat('en-GB', {
                        dateStyle: 'long'
                      }).format(selectedDate)
                    ) : (
                      <span>Pick a Date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    captionLayout='dropdown-buttons'
                    selected={selectedDate}
                    onSelect={date => setSelectedDate(date || new Date())}
                    mode='single'
                    fromYear={2025}
                    toYear={2099}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label>Invoice Due</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select due date' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='0'>Due on Reciept</SelectItem>
                  <SelectItem value='15'>Net 15</SelectItem>
                  <SelectItem value='30'>Net 30</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <div className='mb-2 grid grid-cols-12 gap-4 font-medium'>
              <p className='col-span-6'>Description</p>
              <p className='col-span-2'>Quantity</p>
              <p className='col-span-2'>Rate</p>
              <p className='col-span-2'>Amount</p>
            </div>

            <div className='mb-4 grid grid-cols-12 gap-4'>
              <div className='col-span-6'>
                <Textarea placeholder='Item name & description' />
              </div>
              <div className='col-span-2'>
                <Input
                  type='number'
                  placeholder='0'
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                />
              </div>
              <div className='col-span-2'>
                <Input
                  value={rate}
                  onChange={e => setRate(e.target.value)}
                  type='number'
                  placeholder='0'
                />
              </div>
              <div className='col-span-2'>
                <Input
                  value={formatCurrency({
                    amount: calcualteTotal,
                    currency: currency as any
                  })}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className='flex justify-end'>
            <div className='w-1/3'>
              <div className='flex justify-between py-2'>
                <span>Subtotal</span>
                <span>
                  {formatCurrency({
                    amount: calcualteTotal,
                    currency: currency as any
                  })}
                </span>
              </div>
              <div className='flex justify-between border-t py-2'>
                <span>Total ({currency})</span>
                <span className='font-medium underline underline-offset-2'>
                  {formatCurrency({
                    amount: calcualteTotal,
                    currency: currency as any
                  })}
                </span>
              </div>
            </div>
          </div>

          <div>
            <Label>Note</Label>
            <Textarea placeholder='Add your Note/s right here...' />
          </div>

          <div className='mt-6 flex items-center justify-end'>
            <div>
              <SubmitButton text='Send Invoice to Client' />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
