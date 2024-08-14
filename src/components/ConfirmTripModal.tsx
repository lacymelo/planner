import { ConfirmTripModalProps } from "@/@types/variables";
import { Mail, User, X } from "lucide-react";
import { Button } from "./Button";
import TextInput from "./TextInput";
import { Heading } from "./Heading";

export function ConfirmTripModal({ handleIsConfirmTripModal, createTrip }: ConfirmTripModalProps) {
    return (
        <div className="fixed inset-0 bg-zinc-950/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-lg bg-zinc-900 space-y-5">
                <div className="flex flex-col text-left gap-2">
                    <div className="flex items-center justify-between">
                        <Heading as="h2" size="lg">Confirmar criação de viagem</Heading>

                        <button onClick={handleIsConfirmTripModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>
                    </div>

                    <p className="text-sm text-zinc-400">
                        Para concluir a criação de viagem para <strong className="font-semibold text-zinc-100">Florianópolis</strong>, Brasil <strong className="font-semibold text-zinc-100">nas datas de 16 a 27 de agosto de 2024</strong> preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className="flex flex-col gap-3">
                    <TextInput
                        name="name"
                        placeholder="Seu nome completo"
                        icon={<User className="size-5 text-zinc-400" />}
                    />

                    <TextInput
                        type="email"
                        name="email"
                        placeholder="Seu e-mail pessoal"
                        icon={<Mail className="size-5 text-zinc-400" />}
                    />

                    <Button size="full">
                        Confirmar criação de viagem
                    </Button>
                </form>
            </div>
        </div>
    )
}