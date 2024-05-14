import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import twConfig from '../../../css/tailwind-config-helper';
import { cn } from '@/lib/utils';


const containerFlexVariants = cva(
  'flex flex-wrap w-full',
  {
    variants : {
      variant : {
        hcs : 'flex justify-center items-start',
        hcc : 'flex justify-center items-center',
        hce : 'flex justify-center items-end',
        hss : 'flex justify-start items-start',
        hsc : 'flex justify-start items-center',
        hse : 'flex justify-start items-end',
        hes : 'flex justify-start items-start',
        hec : 'flex justify-start items-center',
        hee : 'flex justify-start items-end',
        hbs : 'flex justify-between items-start',
        hbc : 'flex justify-between items-center',
        hbe : 'flex justify-between items-end',
        vcs : 'flex-col items-center justify-start',
        vcc : 'flex-col items-center justify-center',
        vce : 'flex-col items-center justify-end',
        vss : 'flex-col items-start justify-start',
        vsc : 'flex-col items-start justify-center',
        vse : 'flex-col items-start justify-end',
        ves : 'flex-col items-end justify-start',
        vec : 'flex-col items-end justify-center',
        vee : 'flex-col items-end justify-end',
        
      },
      gap : {
        ...twConfig.gap
      },
      padding : {
        ...twConfig.padding
      }
    },
    defaultVariants : {
      variant : 'hsc',
      gap     : 'sm',
      padding :'sm'
    }
  }
)


interface TProps extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof containerFlexVariants> {
  children      : React.ReactNode;
  customElement?: "ul" | "nav" | "body"  | "main" | 'form'
}


const ContainerFlex : React.FC<TProps> = (props) => {
  const {children, className, variant, gap, padding,   customElement, ...attrs} = props
  const Component  = customElement ?? 'div'  as React.ElementType

  return (
    <Component className={cn(containerFlexVariants({ className,variant, gap, padding,}))} {...attrs}>
      {children}
    </Component>
  )
}



export default ContainerFlex