'use client'
import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react"
import { useState } from "react";

export default function Home() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)

    function openGuestsInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false)
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-md gap-3">
                <div className="flex items-center gap-2 flex-1">
                    <MapPin className="size-5 text-zinc-400" />

                    <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                </div>

                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />

                    <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
                </div>

                <div className="w-px h-6 bg-zinc-800"></div>

                {
                    isGuestsInputOpen ? (
                        <button
                            onClick={closeGuestsInput}
                            className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700 transition-all duration-300">
                            Alterar local/data

                            <Settings2 className="size-5 text-zinc-400" />
                        </button>
                    ) : (
                        <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-300">
                            <span>Continuar</span>

                            <ArrowRight className="size-5 text-lime-950" />
                        </button>
                    )
                }

            </div>

            {isGuestsInputOpen && (
                <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-md gap-3">
                    <div className="flex items-center gap-2 flex-1">
                        <UserRoundPlus className="size-5 text-zinc-400" />

                        <input type="text" placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>

                    <div className="w-px h-6 bg-zinc-800"></div>

                    <button className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-300 ">
                        Confirmar Viagem

                        <ArrowRight className="size-5 text-lime-950" />
                    </button>
                </div>
            )}
        </div>
    )
}