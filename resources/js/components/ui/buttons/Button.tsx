import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLProps } from 'react';

const buttonVariants = cva(
  'w-full  px-4 py-3 rounded-lg items-center disabled:bg-disabled justify-center flex gap-sm  cursor-pointer-custome',
  {
    variants : {
      variant : {
        'primary-contained' : 'bg-primary text-white',
        'primary-outline'   : 'bg-white border-2 border-primary text-primary'

      },
      fit : {
        "true"  : "w-fit",
        "false" : "w-full"
      },
    },
    defaultVariants : {
      variant : 'primary-contained',
      fit     : false,
    }
  }
)

interface TProps extends HTMLProps<HTMLButtonElement>, VariantProps<typeof buttonVariants > {

}

const Button = (props: TProps) => {
  const {variant,children,className,type,...attrs} = props

  return (
    <button
        {...attrs}
        className={cn(buttonVariants({ className,variant,}))}
    >
    {children}
    </button>

  )
}

export default Button