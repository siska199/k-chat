import clsx from "clsx";
import Container from "../Container"
import * as React from 'react';

interface TProps extends React.HTMLProps<HTMLInputElement> {
    onChange?       : (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?   : string;  
    label?          : string;
    vertical        : boolean;
    customeElement?  : {
        Element     : React.ReactNode;
        position    : "start" | "end"
    }
}

const InputCheckbox = (props:TProps) => {
    const {label,vertical=true,customeElement,...attrs} =props
  return (
    <Container gap={"small"} fit variant={vertical?"vss":"hss"} className={clsx({
        [attrs.className || ""] : true
    })}>
        <div className={clsx({
            })}>
            <input

                {...attrs}
                type={"checkbox"}
                className={clsx({
                    'rounded-sm' : true
                })}
            />
            {customeElement && <>{customeElement.Element}</>}
        </div>
        {
            label && 
            <label className={clsx({
                "" : true
            })}>{label}</label>
        }
    </Container>
  )
}

export default InputCheckbox