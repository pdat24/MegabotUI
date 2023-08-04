/** @jsxImportSource @emotion/react */
import { css } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./ChatRoom.module.css";
import { useContext } from "react";
import { Context } from "./ChatContext";

const mb6 = css`
    margin-bottom: 6px;
`;
const linksLstWrapper = css`
    margin: 24px 0;
    overflow: auto;
    height: 100%;
`;

function Sidebar() {
    const [active, setActive] = useContext(Context);
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
    return (
        <div className="h-100">
            <label className={style.searchBar} htmlFor="searchEntry">
                <SearchIcon />
                <input id="searchEntry" className={style.searchEntry} type="text" placeholder="Search here" />
            </label>
            <div css={linksLstWrapper}>
                <ul className={style.linksLst}>
                    {features.map((feature, index) => (
                        <li css={mb6} key={feature} onClick={() => setActive && setActive(index)}>
                            <a
                                className={style.roomLink + ` ${active === index ? style.activeRoom : ""}`}
                                href="javascript:void(0)"
                            >
                                {feature}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
