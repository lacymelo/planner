'use client'
import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserRoundPlus, X } from "lucide-react"
import { FormEvent, useState } from "react";

export default function Home() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([
        'lacienemelogarcia@gmail.com'
    ])

    function addToEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])
    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
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
                            onClick={() => setIsGuestsInputOpen(!isGuestsInputOpen)}
                            className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700 transition-all duration-300">
                            Alterar local/data

                            <Settings2 className="size-5 text-zinc-400" />
                        </button>
                    ) : (
                        <button onClick={() => setIsGuestsInputOpen(!isGuestsInputOpen)} className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-300">
                            <span>Continuar</span>

                            <ArrowRight className="size-5 text-lime-950" />
                        </button>
                    )
                }

            </div>

            {isGuestsInputOpen && (
                <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-md gap-3">
                    <button type="button" onClick={() => setIsGuestsModalOpen(!isGuestsModalOpen)} className="flex items-center gap-2 flex-1 text-left">
                        <UserRoundPlus className="size-5 text-zinc-400" />

                        <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
                    </button>

                    <div className="w-px h-6 bg-zinc-800"></div>

                    <button className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-300 ">
                        Confirmar Viagem

                        <ArrowRight className="size-5 text-lime-950" />
                    </button>
                </div>
            )}

            {
                isGuestsModalOpen && (
                    <div className="fixed inset-0 bg-zinc-950/60 flex items-center justify-center">
                        <div className="w-[640px] rounded-xl py-5 px-6 shadow-lg bg-zinc-900 space-y-5">
                            <div className="flex flex-col text-left gap-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold">Selecionar convidados</h2>

                                    <button onClick={() => setIsGuestsModalOpen(!isGuestsModalOpen)}>
                                        <X className="size-5 text-zinc-400" />
                                    </button>
                                </div>

                                <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {
                                    emailsToInvite.map((email, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-zinc-800 rounded-md py-1.5 px-2.5">
                                            <span className="text-zinc-300">
                                                {email}
                                            </span>

                                            <button type="button" onClick={() => removeEmailFromInvites(email)}>
                                                <X className="size-4 text-zinc-400" />
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="w-full h-px bg-zinc-800"></div>

                            <form onSubmit={addToEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                                <AtSign className="size-5 text-zinc-400" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Digite o e-mail do convidado"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />

                                <button type="submit" className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-300 ">
                                    Convidar

                                    <Plus className="size-5 text-lime-950" />
                                </button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}