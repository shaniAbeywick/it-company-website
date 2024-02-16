import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Services',
  description: "Unlock tomorrow's potential with CDAZZDEV's cutting-edge software solutions. Empowering innovation for a brighter future",
}


export default function ServiceLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }