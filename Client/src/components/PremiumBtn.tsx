/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SwitchAccessShortcutAddOutlinedIcon from "@mui/icons-material/SwitchAccessShortcutAddOutlined";
import { Link } from "react-router-dom";

function PremiumBtn() {
    const style = css`
        background: #f5b434 !important;
        border-radius: 4px;
        color: #000 !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        gap: 6px;
        font-size: 18px;
        text-transform: capitalize;
        padding: 7px 15px;
    `;
    return (
        <Link className="btn" css={style} to="/chat/subcription">
            <SwitchAccessShortcutAddOutlinedIcon className="fs-5" />
            <span className="ml-1 fs-6">
                Get <b>Premium</b>
            </span>
        </Link>
    );
}

export default PremiumBtn;
