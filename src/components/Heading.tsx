import { ComponentProps, ElementType, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const HeadingVariants = tv({
    base: 'font-semibold',
    variants: {
        size: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-5xl',
            '3xl': 'text-6xl',
            '4xl': 'text-7xl',
            '5xl': 'text-8xl',
            '6xl': 'text-9xl',
        }
    },

    defaultVariants: {
        size: 'md'
    }
})

interface HeadingProps extends ComponentProps<'title'>, VariantProps<typeof HeadingVariants> {
    children: ReactNode
    as: ElementType
}

export function Heading({ children, size, as: Component = 'h1', ...rest }: HeadingProps) {
    return (
        <Component className={HeadingVariants({ size })} {...rest}>
            {children}
        </Component>
    )
}