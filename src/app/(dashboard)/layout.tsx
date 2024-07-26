import Image from "next/image";
import { ReactNode } from "react";
import logo from '/public/logo.svg'
import Link from "next/link";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            {children}
        </div>
    )
}