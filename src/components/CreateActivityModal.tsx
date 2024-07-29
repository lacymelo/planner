import { ConfirmTripModalProps, CreateActivityModalProps } from "@/@types/variables";
import { Calendar, Clock, Mail, Tag, User, X } from "lucide-react";
import { Button } from "./Button";

export function CreateActivityModal({ handleIsCreateActivityModal }: CreateActivityModalProps) {
    return (
        <div className="fixed inset-0 bg-zinc-950/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-lg bg-zinc-900 space-y-5">
                <div className="flex flex-col text-left gap-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Cadastrar atividade</h2>

                        <button onClick={handleIsCreateActivityModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>

                <form onSubmit={() => { }} className="flex flex-col gap-3">
                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center w-full gap-2">
                        <Tag className="size-5 text-zinc-400" />

                        <input
                            name="title"
                            placeholder="Qual a atividade"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>

                    <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center w-full gap-2">
                        <Calendar className="size-5 text-zinc-400" />

                        <input
                            type="datetime-local"
                            name="occurs_at"
                            placeholder="Data e horário da atividade"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full" />
                    </div>

                    <Button size="full">
                        Salvar atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}