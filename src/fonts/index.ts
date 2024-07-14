import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})