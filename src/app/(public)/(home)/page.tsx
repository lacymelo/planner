'use client'
import { ConfirmTripModal } from "@/components/ConfirmTripModal";
import { InviteGuestsModal } from "@/components/InviteGuestsModal";
import { ArrowRight, AtSign, Calendar, Mail, MapPin, Plus, Settings2, User, UserRoundPlus, X } from "lucide-react"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
    const router = useRouter()

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

    function handleIsGuestsModal() {
        setIsGuestsModalOpen(!isGuestsModalOpen)
    }

    function handleIsConfirmTripModal() {
        setIsConfirmTripModalOpen(!isConfirmTripModalOpen)
    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }

    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        router.push(`/trip/123`)
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
                            className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-zinc-700 transition-all duration-300 text-base">
                            Alterar local/data

                            <Settings2 className="size-5 text-zinc-400" />
                        </button>
                    ) : (
                        <button onClick={() => setIsGuestsInputOpen(!isGuestsInputOpen)} className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-300 text-base">
                            Continuar

                            <ArrowRight className="size-5 text-lime-950" />
                        </button>
                    )
                }

            </div>

            {isGuestsInputOpen && (
                <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-md gap-3">
                    <button type="button" onClick={() => setIsGuestsModalOpen(!isGuestsModalOpen)} className="flex items-center gap-2 flex-1 text-left">
                        <UserRoundPlus className="size-5 text-zinc-400" />

                        {
                            emailsToInvite.length > 0
                                ?
                                (
                                    <span className="text-zinc-100 text-lg flex-1">
                                        {emailsToInvite.length} pessoa(s) convidadas(s)
                                    </span>
                                )
                                :
                                (
                                    <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
                                )
                        }

                    </button>

                    <div className="w-px h-6 bg-zinc-800"></div>

                    <button onClick={() => setIsConfirmTripModalOpen(!isConfirmTripModalOpen)} className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-all duration-300 text-base">
                        Confirmar Viagem

                        <ArrowRight className="size-5 text-lime-950" />
                    </button>
                </div>
            )}

            {
                isGuestsModalOpen && (
                    <InviteGuestsModal
                        addToEmailToInvite={addToEmailToInvite}
                        emailsToInvite={emailsToInvite}
                        handleIsGuestsModal={handleIsGuestsModal}
                        removeEmailFromInvites={removeEmailFromInvites}
                    />
                )
            }

            {
                isConfirmTripModalOpen && (
                    <ConfirmTripModal
                        createTrip={createTrip}
                        handleIsConfirmTripModal={handleIsConfirmTripModal}
                    />
                )
            }

        </div>
    )
}