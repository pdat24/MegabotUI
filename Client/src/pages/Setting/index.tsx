/**@jsxImportSource @emotion/react */
import clsx from "clsx";
import style from "./Setting.module.css";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { Header } from "~/components";
import { css } from "@emotion/react";
import bg from "~/assets/imgs/info-bg.jpg";
import avatar from "~/assets/imgs/4.jpg";
import { useEffect, useRef, useState } from "react";

const cancelBtn = css`
    background: #303f47 !important;
    color: var(--color-primary) !important;
`;
const infoBg = css`
    background-image: url(${bg});
    background-size: cover;
    border-radius: 8px;
    height: 30vh;
    @media (max-width: 576px) {
        height: 15vh;
    }
`;
const email = css`
    @media (max-width: 576px) {
        font-size: 16px !important;
    }
`;
const infoBlock = css`
    margin-top: -50px;
`;
const name = css`
    font-size: 22px;
    @media (max-width: 576px) {
        font-size: 20px;
    }
`;
const gap32 = css`
    gap: 32px;
`;
const mailEntry = css`
    width: calc(50% - 18px) !important;
    margin-top: 12px;
    @media (max-width: 576px) {
        width: 100% !important;
    }
`;
const actionBtnWrapper = css`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

function Setting() {
    const nameDOM = useRef<HTMLHRElement>(null);
    const emailDOM = useRef<HTMLParagraphElement>(null);
    const updateBtnDOM = useRef<HTMLButtonElement>(null);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const avatarImg = useRef<HTMLImageElement>(null);
    const avatarInput = useRef<HTMLInputElement>(null);

    if (updateBtnDOM.current) {
        updateBtnDOM.current.onclick = () => {
            nameDOM.current!.innerText = nameValue;
            emailDOM.current!.innerText = emailValue;
        };
    }
    useEffect(() => {
        avatarInput.current!.onchange = (e: Event) => {
            const event = e.currentTarget as HTMLInputElement;
            if (event.files) {
                const newAvatar = URL.createObjectURL(event.files[0]);
                avatarImg.current!.src = newAvatar;
            }
        };
    });

    return (
        <div className={style.wrapper}>
            <Header title="History" />
            <div className={style.bodyWrapper}>
                <div className={clsx("container", style.container)}>
                    <div className={clsx("card", style.content)}>
                        <div className={clsx("card-header", style.tableHeader)}>
                            <h3>Setting</h3>
                        </div>
                        <div className="card-body light-text">
                            <div css={infoBg}></div>
                            <div className="text-center" css={infoBlock}>
                                <label className={style.avatar} htmlFor="avatarInput">
                                    <img ref={avatarImg} src={avatar} alt="avatar" />
                                    <span>
                                        <CameraAltOutlinedIcon className="opacity-50 text-dark fs-18" />
                                    </span>
                                    <input type="file" id="avatarInput" className="d-none" ref={avatarInput} />
                                </label>
                                <h5 css={name} className="color-primary m-0" ref={nameDOM}>
                                    Shanaya John
                                </h5>
                                <p className="text-white" css={email} ref={emailDOM}>
                                    shanayajohn@gmail.com
                                </p>
                            </div>
                            <div className="mt-5 text-white">
                                <div className={clsx("d-flex", style.twoInput)} css={gap32}>
                                    <label htmlFor="fName" className="flex-grow-1">
                                        <span className="mb-1 d-block">Full Name</span>
                                        <input
                                            value={nameValue}
                                            onChange={(e) => setNameValue(e.target.value)}
                                            type="text"
                                            required
                                            id="fName"
                                            className={style.entries}
                                            placeholder="Enter your name..."
                                        />
                                    </label>
                                    <label htmlFor="lName" className="flex-grow-1">
                                        <span className="mb-1 d-block">Phone number</span>
                                        <input
                                            placeholder="Enter Phone number..."
                                            type="tel"
                                            id="lName"
                                            className={style.entries}
                                        />
                                    </label>
                                </div>
                                <label htmlFor="email" css={mailEntry}>
                                    <span className="mb-1 d-block">Email address</span>
                                    <input
                                        value={emailValue}
                                        onChange={(e) => setEmailValue(e.target.value)}
                                        placeholder="Enter email address..."
                                        type="email"
                                        required
                                        id="email"
                                        className={style.entries}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="mb-4" css={actionBtnWrapper}>
                                <button ref={updateBtnDOM} className={clsx("common-btn3", style.actionBtn)}>
                                    Update
                                </button>
                                <button className={clsx("common-btn3", style.actionBtn)} css={cancelBtn}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx("container mt-5", style.container)}>
                    <div className={clsx("card", style.content)}>
                        <div className={clsx("card-header", style.tableHeader)}>
                            <h3>Change password</h3>
                        </div>
                        <div className="card-body light-text">
                            <div className="mt-3 text-white">
                                <div className={clsx("d-flex", style.twoInput)} css={gap32}>
                                    <label htmlFor="password" className="flex-grow-1">
                                        <span className="mb-1 d-block">New Password</span>
                                        <input
                                            type="password"
                                            id="password"
                                            className={style.entries}
                                            placeholder="Enter new password..."
                                        />
                                    </label>
                                    <label htmlFor="password_" className="flex-grow-1">
                                        <span className="mb-1 d-block">Confirm password</span>
                                        <input
                                            placeholder="Comfirm password..."
                                            type="password"
                                            id="password_"
                                            className={style.entries}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="mb-4" css={actionBtnWrapper}>
                                <button className={clsx("common-btn3", style.actionBtn)}>Update password</button>
                                <button className={clsx("common-btn3", style.actionBtn)} css={cancelBtn}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
