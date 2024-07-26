import { ConfirmTripModalProps } from "@/@types/variables";
import { Mail, User, X } from "lucide-react";

export function ConfirmTripModal({ handleIsConfirmTripModal, createTrip }: ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-zinc-950/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-lg bg-zinc-900 space-y-5">
                <div className="flex flex-col text-left gap-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>

                        <button onClick={handleIsConfirmTripModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-400">
                        Para concluir a criação de viagem para <strong className="font-semibold text-zinc-100">Florianópolis</strong>, Brasil <strong className="font-semibold text-zinc-100">nas datas de 16 a 27 de agosto de 2024</strong> preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className="flex flex-col gap-3">
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center w-full gap-2">
                        <User className="size-5 text-zinc-400" />

                        <input
                            name="name"
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>

                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center w-full gap-2">
                        <Mail className="size-5 text-zinc-400" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>

                    <button type="submit" className="bg-lime-300 text-lime-950 p-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-all duration-300 w-full">
                        Confirmar criação de viagem
                    </button>
                </form>
            </div>
        </div>
    )
}