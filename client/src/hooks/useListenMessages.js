import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";
import notsound from "../assets/sounds/notsound.mp3";

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            newMessage.shouldShake = true;
            const sound = new Audio(notsound);
            sound.play();
            setMessages([...messages, newMessage]);
        })
        // *Not listening the event more than 1 time
        return () => socket?.off("newMessage");
    },[setMessages, messages, socket]);
}

export default useListenMessages