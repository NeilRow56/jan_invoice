import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table'
import { InvoiceActions } from './InvoiceActions'

export function InvoiceList() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>#1</TableCell>
            <TableCell>Jan Marshal</TableCell>
            <TableCell>£25.63</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>22/11/2024</TableCell>
            <TableCell className='text-right'>
              <InvoiceActions status='NOT_PAID' id='#1' />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}