import { InviteGuestsModalProps } from "@/@types/variables";
import { AtSign, Plus, X } from "lucide-react";
import { Button } from "./Button";

export function InviteGuestsModal({ handleIsGuestsModal, emailsToInvite, removeEmailFromInvites, addToEmailToInvite }: InviteGuestsModalProps) {
    return (
        <div className="fixed inset-0 bg-zinc-950/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-lg bg-zinc-900 space-y-5">
                <div className="flex flex-col text-left gap-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Selecionar convidados</h2>

                        <button onClick={handleIsGuestsModal}>
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

                    <Button>
                        Convidar

                        <Plus className="size-5 text-lime-950" />
                    </Button>
                </form>
            </div>
        </div>
    )
}