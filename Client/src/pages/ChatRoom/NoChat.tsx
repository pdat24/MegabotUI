/** @jsxImportSource @emotion/react */
import roomBg from "~/assets/imgs/no-chat.svg";
import style from "./ChatRoom.module.css";
import { css } from "@mui/material";

function NoChat() {
    return (
        <div className="d-flex justify-content-center align-items-center h-100 flex-column">
            <div
                css={css`
                    filter: brightness(0.5);
                    display: flex;
                    justify-content: center;
                `}
            >
                <img
                    src={roomBg}
                    alt="nocontent"
                    className={style.noChatImg}
                    css={css`
                        filter: grayscale(1);
                    `}
                />
            </div>
            <h4
                className="color-primary mt-3"
                css={css`
                    @media (max-width: 576px) {
                        font-size: 18px;
                    }
                `}
            >
                Ask anything to chatbot
            </h4>
        </div>
    );
}

export default NoChat;
