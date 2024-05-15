import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react'

const containerFlexVariants = cva(
  'flex flex-wrap rounded-full',
  {
    variants : {
      variant : {
        "large"   : 'min-w-[3.5rem] h-[3.5rem]',
        "medium"  : 'min-w-[2.75rem] h-[2.75rem]',
        "base"    : 'min-w-[3rem] h-[3rem]',
        'small'   : 'min-w-[1.5rem] h-[1.5rem]'
      },

    },
    compoundVariants : [ 
    ],
    defaultVariants : {
      variant : 'base',
    }
  }
)


interface TProps  extends  VariantProps<typeof containerFlexVariants> {
  src           : string;
  alt           : string;
  className?    : string;
  isMarkOnline? : boolean;
  onClik?       : ()=>void;

}

const Avatar = (props: TProps ) => {
  const {src, alt,variant, isMarkOnline=false, className,onClik } = props
  return (
    <div className={clsx({
      "relative" : true,
      "cursor-pointer-custome " : onClik
    })} onClick={()=>onClik ? onClik() : null}>
      <img src={src} alt={alt} className={cn(containerFlexVariants({ className,variant, }))}/>
      {
        isMarkOnline &&  <div className='w-[0.75rem] h-[0.75rem] border-[#ffff] border-[2px]  rounded-full bg-success-300 absolute bottom-0 right-0'></div>
      }

    </div>
  )
}

export default Avatar