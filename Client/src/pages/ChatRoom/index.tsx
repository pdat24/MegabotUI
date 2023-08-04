/** @jsxImportSource @emotion/react */
import SendIcon from "@mui/icons-material/Send";
import clsx from "clsx";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import style from "./ChatRoom.module.css";
import { Tooltip, css } from "@mui/material";
import { useState, KeyboardEvent, useEffect } from "react";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { PremiumBtn } from "~/components";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import favicon from "~/assets/favicon.png";
import ChatContext from "./ChatContext";
import { Modal as HeaderModal } from "~/components/Header";
import NoChat from "./NoChat";
import MessageRight from "./MessageRight";
import MessageLeft from "./MessageLeft";

const title = css`
    color: var(--color-primary);
    margin: 0;
    font-size: 24px;
    @media (max-width: 576px) {
        font-size: 20px;
    }
`;

function SidebarModal() {
    const closeBtn = css`
        font-size: 28px;
        color: var(--color-primary);
    `;
    const modalCss = css`
        max-width: 90%;
        width: 320px !important;
        background-color: #232831;
    `;
    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="sidebarModal"
            aria-labelledby="sidebarModalLabel"
            css={modalCss}
        >
            <div className="offcanvas-header justify-content-end">
                <div data-bs-dismiss="offcanvas" aria-label="Close" role="button">
                    <HighlightOffRoundedIcon css={closeBtn} />
                </div>
            </div>
            <div
                className="offcanvas-body"
                css={css`
                    ::-webkit-scrollbar {
                        width: 3px;
                        background-color: #2f4043;
                    }
                    ::-webkit-scrollbar-thumb {
                        background-color: #35967a;
                    }
                `}
            >
                <Sidebar />
            </div>
        </div>
    );
}

function ChatContent() {
    const [msgs, setMsgs] = useState<string[]>([]);
    const [newMsg, setNewMsg] = useState("");

    useEffect(() => {
        const handler = () => setMsgs([]);
        window.addEventListener("clearRoom", handler);
        return () => window.removeEventListener("clearRoom", handler);
    }, []);

    const iconCSs = css`
        @media (max-width: 576px) {
            font-size: 20px;
        }
    `;
    const menuIcon = css`
        display: none;
        @media (max-width: 992px) {
            display: flex;
        }
    `;
    const leftMsg = [
        "Hello my boys:)",
        "Sorry! But i don't know anything! :vv",
        "I'm not a chatbot, i'm a girl :)",
        "Thanks for seeing my site",
        "Can you send me 19.99$?",
        ":))",
    ];
    const handleSend = () => {
        if (newMsg) {
            setMsgs([...msgs, newMsg]);
            setNewMsg("");
            setTimeout(() => {
                setMsgs([...msgs, newMsg, leftMsg[Math.round(Math.random() * leftMsg.length)]]);
            }, 500);
        }
    };
    const handleSendByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSend();
    };
    return (
        <div className={style.chatContent}>
            {msgs.length ? (
                <div className={style.messageBlock}>
                    <div className={style.messageWrapper}>
                        {msgs.map((msg, index) => {
                            return index % 2 === 0 ? (
                                <MessageRight key={index}>{msg}</MessageRight>
                            ) : (
                                <MessageLeft key={index}>{msg}</MessageLeft>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <NoChat />
            )}
            <div className="d-flex justify-content-center">
                <div className={style.entryWrapper}>
                    <div
                        css={menuIcon}
                        className={style.sendBtn}
                        role="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebarModal"
                        aria-controls="sidebarModal"
                    >
                        <MenuIcon />
                    </div>
                    <div className={style.chatEntry}>
                        <input
                            type="text"
                            className={clsx("form-control form-control-lg", style.msgEntry)}
                            placeholder="Ask any question here..."
                            value={newMsg}
                            onChange={(e) => setNewMsg(e.target.value)}
                            onKeyDown={handleSendByEnter}
                        />
                        <div className="d-flex gap-3">
                            <Tooltip title="Scan" placement="top">
                                <DocumentScannerOutlinedIcon css={iconCSs} className="cursor-ptr" />
                            </Tooltip>
                            <Tooltip title="Micro" placement="top">
                                <MicNoneIcon css={iconCSs} className="cursor-ptr" />
                            </Tooltip>
                        </div>
                    </div>
                    <button className={clsx(style.sendBtn)} onClick={handleSend}>
                        <SendIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

function ChatRoom() {
    const [activeRoom, setActiveRoom] = useState(0);
    const features = [
        "Ask anything",
        "Code generator",
        "Image generator",
        "Essay writer",
        "Travel/hangout",
        "Password generator",
        "Personal advise",
        "Email generator",
        "Social media",
        "Translate anything",
    ];
    const menuIcon = css`
        width: 32px;
        height: 32px;
        background: var(--color-primary);
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        display: none;
        @media (max-width: 767px) {
            display: flex;
        }
    `;
    const logoRespon = css`
        display: none;
        @media (max-width: 767px) {
            display: flex;
        }
    `;
    const handleClearRoom = () => window.dispatchEvent(new CustomEvent("clearRoom"));
    return (
        <ChatContext value={[activeRoom, setActiveRoom]}>
            <div>
                <div className={style.wrapper}>
                    <Sidebar />
                </div>
                <div className={style.miniChat}>
                    <div className="h-100">
                        <div className={style.header}>
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    css={menuIcon}
                                    role="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#menuModal"
                                    aria-controls="menuModal"
                                >
                                    <MenuIcon />
                                </div>
                                <a href="/" css={logoRespon}>
                                    <img
                                        src={favicon}
                                        alt="logo"
                                        css={css`
                                            width: 32px;
                                        `}
                                    />
                                </a>
                                <h3 css={title}>{features[activeRoom]}</h3>
                            </div>
                            <div className={clsx("d-flex align-items-center gap-3", style.actionBtnBlock)}>
                                <button className={"btn " + style.trash} onClick={handleClearRoom}>
                                    <Tooltip title="Clear conversion" placement="bottom">
                                        <DeleteOutlinedIcon />
                                    </Tooltip>
                                </button>
                                <PremiumBtn />
                            </div>
                        </div>
                        <ChatContent />
                    </div>
                </div>
                <SidebarModal />
                <HeaderModal />
            </div>
        </ChatContext>
    );
}

export default ChatRoom;
