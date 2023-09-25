
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Provider from '@/providers/Provider'




const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haroue Blog App',
  description: 'Blog Haroune',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Provider>
              <div className='min-h-screen bg-white dark:bg-[#0f172a] dark:text-white'>
                <div className="ml-auto mr-auto max-w-[1536px] max-2xl:max-w-[1366px] xl:max-w-[1024px] lg:max-w-[768px] md:max-w-[640px] sm:max-w-[475px] px-[30px]">
                  <Navbar/>
                    {children}
                  <Footer/>
                </div>
              </div>
      </Provider>
      </body>
    </html>
  )
}
