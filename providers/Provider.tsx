import React from 'react'
import AuthProvider from './AuthProvider'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from './ThemeProvider'


const Provider = ({children}:{children:React.ReactNode}) => {

  return (
          <AuthProvider>
            <ThemeContextProvider>
                <ThemeProvider>
                          {children}
                </ThemeProvider>
            </ThemeContextProvider>
        </AuthProvider>
  )

}

export default Provider