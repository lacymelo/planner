import { FormEvent } from "react"

export type InviteGuestsModalProps = {
    handleIsGuestsModal: () => void,
    emailsToInvite: string[],
    removeEmailFromInvites: (emailToRemove: string) => void,
    addToEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export type ConfirmTripModalProps = {
    handleIsConfirmTripModal: () => void,
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}