import { create } from "zustand";
import createChatSlice, { TChatSlice } from './chat/chatSlice';


const useBoundStore = create<TChatSlice>()((...a) => ({
    ...createChatSlice(...a),
}))

export default useBoundStore