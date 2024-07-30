import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<'input'> {
    icon?: JSX.Element
}

const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { icon, ...rest } = props

    return (
        <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center w-full gap-2">
            {!!icon && (icon)}

            <input
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-full"
                ref={ref}
                {...rest}
            />
        </div>
    )
})

export default TextInput