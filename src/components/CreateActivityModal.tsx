import { ConfirmTripModalProps, CreateActivityModalProps } from "@/@types/variables";
import { Calendar, Clock, Mail, Tag, User, X } from "lucide-react";
import { Button } from "./Button";
import TextInput from "./TextInput";
import { Heading } from "./Heading";

export function CreateActivityModal({ handleIsCreateActivityModal }: CreateActivityModalProps) {
    return (
        <div className="fixed inset-0 bg-zinc-950/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-lg bg-zinc-900 space-y-5">
                <div className="flex flex-col text-left gap-2">
                    <div className="flex items-center justify-between">
                        <Heading as="h2" size="lg">Cadastrar atividade</Heading>

                        <button onClick={handleIsCreateActivityModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-400">
                        Todos convidados podem visualizar as atividades.
                    </p>
                </div>

                <form onSubmit={() => { }} className="flex flex-col gap-3">
                    <TextInput
                        name="title"
                        placeholder="Qual a atividade"
                        icon={<Tag className="size-5 text-zinc-400" />}
                    />

                    <TextInput
                        type="datetime-local"
                        name="occurs_at"
                        placeholder="Data e horário da atividade"
                        icon={<Calendar className="size-5 text-zinc-400" />}
                    />

                    <Button size="full">
                        Salvar atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}