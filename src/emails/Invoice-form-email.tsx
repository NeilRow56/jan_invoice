import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text
} from '@react-email/components'
import * as React from 'react'

interface ContactFormEmailProps {
  fromName: string
  fromEmail: string
  message: string
  clientName: string
  invoiceNumber: number
  dueDate: number
  total: number
}

export const InvoiceFormEmail = ({
  fromName,
  fromEmail,
  clientName,
  message,
  invoiceNumber,
  dueDate,
  total
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>Invoice from WpAccPac</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Invoice form submission</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          {/* Or, copy and paste this temporary login code: */}
        </Text>
        <p>
          From <strong>{fromName}</strong> at {fromEmail}
        </p>
        <h2>Message:</h2>
        <p>{message}</p>
        <Text
          style={{
            ...text,
            color: '#2803fc',
            marginTop: '12px',
            marginBottom: '38px'
          }}
        >
          Thank you foryour business.
        </Text>
        <h2>Invoice for {clientName}</h2>

        <p>Dear ,</p>

        <p>
          I hope this email finds you well. Please find attached your invoice
          attached below
        </p>

        <p>Invoice Details:</p>
        <ul>
          <li>Invoice Number: {invoiceNumber}</li>
          <li>Due Date: {dueDate}</li>
          <li>Total Amount: {total}</li>
        </ul>

        <p>You can download your invoice by clicking the button below:</p>

        <Button style={button} href='/'>
          Download Invoice
        </Button>
        <p>
          <a href='xyz'>Link</a>
        </p>

        <p>
          If you have any questions or concerns, please don't hesitate to
          contact us.
        </p>

        <p>Thank you for your business!</p>
      </Container>
    </Body>
  </Html>
)

export default InvoiceFormEmail

const main = {
  backgroundColor: '#ffffff'
}

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto'
}

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0'
}

const button = {
  fontSize: '14px',
  backgroundColor: '#2803fc',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '12px 24px'
}

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline'
}

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0'
}

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px'
}

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333'
}
