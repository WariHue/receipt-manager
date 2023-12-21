import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/Providers'
import { Nav } from '@/components/Nav'
import { Link } from '@nextui-org/react'
import packageJSON from '../../package.json'

import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Receipt Manager',
  description: 'WariHue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Nav />
					<main className="mx-auto max-w-[1024px] px-6 mt-4">{children}</main>
					<footer className="mx-auto max-w-[1024px] px-6 my-4 flex">
            <div className="text-red-100 font-bold flex-grow w-0 text-left">
              <Link
                target='_blank'
                rel='nonferrer'
                href='https://undertale.com/'>Undertale</Link>
            </div>
						<div className="text-gray-500 font-light flex-grow w-0 text-center">
							v{packageJSON.version}
						</div>
						<div className="text-gray-500 font-light flex-grow w-0 text-right">
              Receipt Manager
						</div>
					</footer>
				</Providers>
			</body>
		</html>
  )
}
