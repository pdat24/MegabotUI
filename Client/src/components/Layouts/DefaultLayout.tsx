/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactElement } from "react";
import logo from "~/assets/imgs/logo-icon.svg";
import style from "./Layout.module.css";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import SwitchAccessShortcutAddOutlinedIcon from "@mui/icons-material/SwitchAccessShortcutAddOutlined";
import RateModal from "../RateModal";

const fs30 = css`
    font-size: 30px;
`;

interface INavIcon {
    icon: ReactElement;
    href: string;
    title: string;
}
function NavIcon({ icon, href, title }: INavIcon) {
    const activeStyle = {
        color: "var(--color-primary)",
        background: "var(--light-primary)",
    };
    return (
        <Tooltip title={title} placement="right">
            <NavLink style={({ isActive }) => (isActive ? activeStyle : {})} to={href} className={style.navLinks}>
                {icon}
            </NavLink>
        </Tooltip>
    );
}

function DefaultLayout({ children }: { children: ReactElement }) {
    const navLinks: Array<INavIcon> = [
        { icon: <ForumOutlinedIcon css={fs30} />, title: "Chat room", href: "/chat/home" },
        { icon: <ChangeCircleOutlinedIcon css={fs30} />, title: "History", href: "/chat/history" },
        { icon: <SwitchAccessShortcutAddOutlinedIcon css={fs30} />, title: "Subcription", href: "/chat/subcription" },
        { icon: <QuizOutlinedIcon css={fs30} />, title: "FAQ", href: "/chat/FAQ" },
        { icon: <SettingsOutlinedIcon css={fs30} />, title: "Setting", href: "/chat/setting" },
    ];
    return (
        <div>
            <nav className={style.navBar}>
                <div>
                    <a href="/" className={style.navLogo}>
                        <img src={logo} alt="logo" />
                    </a>
                    <div className={style.navLinksWrapper}>
                        {navLinks.map((navLink) => (
                            <NavIcon key={navLink.href} title={navLink.title} icon={navLink.icon} href={navLink.href} />
                        ))}
                        <Tooltip title="Rating" placement="right">
                            <a
                                href="javascript:void(0)"
                                className={style.navLinks}
                                data-bs-toggle="modal"
                                data-bs-target="#RateModal"
                            >
                                <StarBorderRoundedIcon css={fs30} />
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </nav>
            <div>{children}</div>
            <RateModal />
        </div>
    );
}

export default DefaultLayout;
