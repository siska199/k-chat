import clsx from "clsx";
import Container from "../Container"
import * as React from 'react';

interface TProps extends React.HTMLProps<HTMLInputElement> {
    onChange?       : (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?   : string;  
    label?          : string;
    customeElement?  : {
        Element     : React.ReactNode;
        position    : "start" | "end"
    }
}

const InputBase = (props:TProps) => {
    const {label,customeElement,...attrs} =props
  return (
    <Container gap={"small"} >
        {
            label && 
            <label className={clsx({
                "" : true
            })}>{label}</label>
        }
        <div className={clsx({
            "bg-white flex flex-nowrap items-center gap-2 text-body-small border border-input overflow-hidden rounded-lg focus-within:!border-primary   w-full px-3 py-2" : true
        })}>
            <input

                {...attrs}
                className={clsx({
                    'flex-grow !outline-none !border-none focus:border-none focus:ring-0 p-0 text-body-base placeholder:text-gray-300' : true
                })}
            />
            {customeElement && <>{customeElement.Element}</>}
        </div>
    </Container>
  )
}

export default InputBase