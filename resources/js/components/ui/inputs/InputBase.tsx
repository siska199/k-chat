import clsx from "clsx";
import Container from "../Container"
import React, {useState} from 'react';
import ErrorMessage from "../ErrorMessage";
import { IconCloseEye, IconEye } from "../Icon";

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
    const {label,errorMessage,customeElement,type,...attrs} =props
    const [dynamicType, setDynamicType] = useState(type)
  
    return (
    <Container gap={"small"} >
        {
            label && 
            <label className={clsx({
                "" : true
            })}>{label}</label>
        }
        <section className="flex flex-col gap-2 w-full">
            <div className={clsx({
                "bg-white flex flex-nowrap items-center gap-2 text-body-small border border-input overflow-hidden rounded-lg focus-within:!border-primary   w-full px-3 py-2" : true
            })}>
                <input
                    {...attrs}
                    className={clsx({
                        'flex-grow !outline-none !border-none focus:border-none focus:ring-0 p-0 text-body-base placeholder:text-gray-300' : true
                    })}
                    type={dynamicType}
                />
                {customeElement && <>{customeElement.Element}</>}
                {
                    type==="password" && <div className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={()=>setDynamicType(prev=>prev==="password"?"text":"password")}>{
                        dynamicType==="password" ? <IconEye/> : <IconCloseEye/>
                    }</div>
                }
            </div>
            <ErrorMessage message={errorMessage}/>
        </section>
    </Container>
  )
}

export default InputBase