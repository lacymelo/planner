'use client'
import { Button } from "@/components/Button";
import { CreateActivityModal } from "@/components/CreateActivityModal";
import { Heading } from "@/components/Heading";
import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Trip() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function handleIsCreateActivityModal() {
        setIsCreateActivityModalOpen(!isCreateActivityModalOpen)
    }

    return (
        <>
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400" />

                    <span className="text-base text-zinc-100">
                        Florianópolis Brasil
                    </span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400" />

                        <span className="text-base text-zinc-100">17 a 23 de agosto</span>
                    </div>

                    <div className="w-px h-6 bg-zinc-800"></div>

                    <Button variant="secondary">
                        Alterar local/data

                        <Settings2 className="size-5" />
                    </Button>
                </div>
            </div>

            <main className="flex gap-16 px-6">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <Heading as="h2" size="3xl">Atividades</Heading>

                        <Button onClick={() => handleIsCreateActivityModal()}>
                            <Plus className="size-5 text-lime-950" />

                            Cadastrar atividade
                        </Button>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>

                            <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data</p>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>

                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-lg flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100 text-base">Academia em grupa</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>

                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-lg flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100 text-base">Academia em grupa</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                            </div>
                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-lg flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100 text-base">Academia em grupa</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                            </div>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>

                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-lg flex items-center gap-3">
                                <CircleCheck className="size-5 text-lime-300" />
                                <span className="text-zinc-100 text-base">Academia em grupa</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                            </div>

                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-lg flex items-center gap-3">
                                <CircleDashed className="size-5 text-zinc-400" />
                                <span className="text-zinc-100 text-base">Academia em grupa</span>
                                <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-80 space-y-6">
                    <div className="space-y-6">
                        <Heading as="h2" size="xl">Links importantes</Heading>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100 text-base">Reserva do AirBnB</span>
                                    <Link href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-all transform duration-300">
                                        Reserva do AirBnB
                                    </Link>
                                </div>

                                <Link2 className="text-zinc-400 size-5 shrink-0" />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100 text-base">Reserva do AirBnB</span>
                                    <Link href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-all transform duration-300">
                                        Reserva do AirBnB
                                    </Link>
                                </div>

                                <Link2 className="text-zinc-400 size-5 shrink-0" />
                            </div>
                        </div>

                        <Button variant="secondary" size="full">
                            <Plus className="size-5" />

                            Cadastrar novo link
                        </Button>
                    </div>

                    <div className="w-full h-px bg-zinc-800"></div>

                    <div className="space-y-6">
                        <Heading as="h2" size="xl">Convidados</Heading>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100 text-base">Reserva do AirBnB</span>
                                    <Link href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-all transform duration-300">
                                        Reserva do AirBnB
                                    </Link>
                                </div>

                                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100 text-base">Reserva do AirBnB</span>
                                    <Link href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-all transform duration-300">
                                        Reserva do AirBnB
                                    </Link>
                                </div>

                                <CircleCheck className="size-5 text-lime-300" />
                            </div>
                        </div>

                        <Button variant="secondary" size="full">
                            <UserCog className="size-5" />

                            Gerenciar convidados
                        </Button>
                    </div>

                </div>
            </main>

            {
                isCreateActivityModalOpen && (
                    <CreateActivityModal
                        handleIsCreateActivityModal={handleIsCreateActivityModal}
                    />
                )
            }
        </>
    )
}