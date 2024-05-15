import { TObject } from "@/types";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn=(...inputs: ClassValue[])=> {
    return twMerge(clsx(inputs));
}

interface TParamsGetAssetURl {
    name : string;
    folder? : 'images' | 'icons'
}
export const getAssetURL = (params:TParamsGetAssetURl)=>{
    const {name, folder='images'} = params
    return new URL(`../../assets/${folder}/${name}`, import.meta.url)?.href
}


export const deepCopy = (obj:TObject) : TObject=> {
    return JSON.parse(JSON.stringify(obj))
}