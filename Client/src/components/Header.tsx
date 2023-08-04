/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PremiumBtn } from ".";
import MenuIcon from "@mui/icons-material/Menu";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import SwitchAccessShortcutAddOutlinedIcon from "@mui/icons-material/SwitchAccessShortcutAddOutlined";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { NavLink } from "react-router-dom";
import favicon from "~/assets/favicon.png";

const fs30 = css`
    font-size: 30px;
`;

const linkCss = css`
    color: #fff;
    margin-bottom: 8px;
    justify-content: start;
    gap: 12px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.5s ease;
    &:hover {
        color: var(--color-primary);
        background: var(--light-primary);
    }
`;

const activeStyle = {
    color: "var(--color-primary)",
    background: "var(--light-primary)",
};

export function Modal() {
    const navLinks = [
        { icon: <ForumOutlinedIcon css={fs30} />, label: "Chat", href: "/chat/home" },
        { icon: <ChangeCircleOutlinedIcon css={fs30} />, label: "History", href: "/chat/history" },
        { icon: <SwitchAccessShortcutAddOutlinedIcon css={fs30} />, label: "Subcription", href: "/chat/subcription" },
        { icon: <QuizOutlinedIcon css={fs30} />, label: "Help", href: "/chat/FAQ" },
        { icon: <SettingsOutlinedIcon css={fs30} />, label: "Setting", href: "/chat/setting" },
    ];
    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="menuModal"
            aria-labelledby="menuModalLabel"
            css={css`
                max-width: 90%;
                width: 280px !important;
                background-color: #232831;
            `}
        >
            <div className="offcanvas-header justify-content-end">
                <div data-bs-dismiss="offcanvas" aria-label="Close" role="button">
                    <HighlightOffRoundedIcon
                        css={css`
                            font-size: 28px;
                            color: var(--color-primary);
                        `}
                    />
                </div>
            </div>
            <div className="offcanvas-body">
                {navLinks.map((link, index) => (
                    <NavLink
                        to={link.href}
                        css={linkCss}
                        key={index}
                        style={({ isActive }) => (isActive ? activeStyle : {})}
                        onClick={() => {
                            document.body.style.padding = "0";
                            document.body.style.overflow = "auto";
                        }}
                    >
                        <span>{link.icon}</span>
                        <span>{link.label}</span>
                    </NavLink>
                ))}
                <a href="javascript:void(0)" css={linkCss} data-bs-toggle="modal" data-bs-target="#RateModal">
                    <span>
                        <StarBorderRoundedIcon css={fs30} />
                    </span>
                    <span>Rating</span>
                </a>
            </div>
        </div>
    );
}

function Header({ title }: { title: string }) {
    const premiumBtnCss = css`
        @media (max-width: 767px) {
            display: none;
        }
    `;
    const logoRespon = css`
        display: none;
        @media (max-width: 767px) {
            display: flex;
        }
    `;
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
    const headerCss = css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        border-bottom: 1px solid rgba(var(--title-color), 0.15);
        width: calc(100% - 100px);
        padding: 24px;
        z-index: 10;
        top: 0;
        background-color: #141d2a;
        border-bottom: 1px solid rgba(245, 245, 245, 0.2);
        @media (max-width: 767px) {
            width: 100%;
        }
    `;
    return (
        <header css={headerCss}>
            <div className="d-flex justify-content-between w-100">
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
                    <h4 className="color-primary mb-0">{title}</h4>
                </div>
                <div css={premiumBtnCss}>
                    <PremiumBtn />
                </div>
            </div>
            <Modal />
        </header>
    );
}

export default Header;
