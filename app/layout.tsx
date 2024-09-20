import '../style/globals.css'
import {Vazirmatn} from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider"
import React from "react";

const vazirmatn = Vazirmatn({
    subsets: ['arabic'],
    display: 'swap',
    variable: '--font-vazirmatn',
})

export const metadata = {
    title: 'کفش پانیک - مدیریت موجودی',
    description: 'سیستم مدیریت موجودی برای پانیک شوز',
}

interface RootLayerProps{
    children?: React.ReactNode
}

export default function RootLayout({ children,}: RootLayerProps) {
    return (
        <html lang="fa" dir="rtl" className={vazirmatn.variable}>
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}