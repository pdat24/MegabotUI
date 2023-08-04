import { Dispatch, ReactElement, SetStateAction, createContext } from "react";

export const Context = createContext<[number, Dispatch<SetStateAction<number>>] | []>([]);

function ChatContext({
    children,
    value,
}: {
    children: ReactElement;
    value: [number, Dispatch<SetStateAction<number>>];
}) {
    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ChatContext;
