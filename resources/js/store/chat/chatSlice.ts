import { StateCreator } from "zustand"


export interface TChatSlice {
    isShowProfileConversation: boolean;
    setShowProfileConversation : (state:boolean)=>void;
}

const createChatSlice : StateCreator<TChatSlice,[],[], TChatSlice> = (set,get)=>({
    isShowProfileConversation : false,


    setShowProfileConversation : (state:boolean)=>{
        set({isShowProfileConversation:state})
    }

})






export default createChatSlice