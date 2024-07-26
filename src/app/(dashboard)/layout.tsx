import Image from "next/image";
import { ReactNode } from "react";
import logo from '/public/logo.svg'
import Link from "next/link";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            {children}
        </div>
    )
}