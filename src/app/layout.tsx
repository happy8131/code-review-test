import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frontend Developer Fan Page',
  description: '프론트엔드 개발자를 위한 홈페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="ko">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
