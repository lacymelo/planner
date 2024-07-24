import Image from "next/image";
import { ReactNode } from "react";
import logo from '/public/logo.svg'
import Link from "next/link";

export default async function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl px-6 text-center space-y-10">
                <div className="flex items-center flex-col justify-center gap-3">
                    <Image
                        src={logo}
                        height={44}
                        width={172}
                        alt="plann.er"
                        quality={100}
                    />

                    <p className="text-zinc-300 text-lg">
                        Convide seus amigos e planeje sua próxima viagem!
                    </p>
                </div>

                {children}

                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos <Link href="" className="text-zinc-300 underline">termos de uso</Link> e <Link href="" className="text-zinc-300 underline">políticas de privacidade</Link>
                </p>
            </div>
        </div>
    )
}