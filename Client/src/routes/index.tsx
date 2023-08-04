import { ChatRoom, History, Faq, Subcription, Setting } from "~/pages";

const routers = [
    { path: "/chat/home", page: <ChatRoom /> },
    { path: "/chat/history", page: <History /> },
    { path: "/chat/subcription", page: <Subcription /> },
    { path: "/chat/FAQ", page: <Faq /> },
    { path: "/chat/setting", page: <Setting /> },
];

export default routers;
