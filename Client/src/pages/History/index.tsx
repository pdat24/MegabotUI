/**@jsxImportSource @emotion/react */
import SearchIcon from "@mui/icons-material/Search";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import { Header } from "~/components";
import style from "./History.module.css";
import clsx from "clsx";
import { css } from "@emotion/react";

const fs28 = css`
    font-size: 28px;
`;

function History() {
    const questions = [
        "Wishes of father’s day",
        "“How are you ?” Translate it",
        "Include a hashtag in your caption for the goa photo and some music suggestions.",
        "Write essay about “Cow”",
        "Marvel has sent you an image.",
        "Wishes of father’s day",
        "What is app development ?",
        "Dino has sent you message.",
    ];
    return (
        <div className={style.wrapper}>
            <Header title="History" />
            <div className={style.bodyWrapper}>
                <div className={clsx("container", style.container)}>
                    <div className={clsx("card", style.content)}>
                        <div className={clsx("card-header", style.tableHeader)}>
                            <h3>Detailed History</h3>
                            <label className={style.searchBar} htmlFor="searchEntry">
                                <SearchIcon />
                                <div className={style.span}></div>
                                <input
                                    id="searchEntry"
                                    className={style.searchEntry}
                                    type="text"
                                    placeholder="Search here"
                                />
                            </label>
                        </div>
                        <div className="card-body light-text">
                            {questions.map((question, index) => (
                                <div
                                    key={index}
                                    className={clsx(style.listItem, {
                                        "pt-0": index === 0,
                                    })}
                                >
                                    <div className="d-flex">
                                        <ChatRoundedIcon css={fs28} />
                                        <span className={clsx("ms-3", style.qText)}>{question}</span>
                                    </div>
                                    <div className={clsx("d-flex position-relative ps-4 flex-shrink-0", style.time)}>
                                        <div className={clsx("color-primary", style.historyType)}>Essay writing</div>
                                        <div className={style.span}></div>
                                        <div>25 Mar, 2023</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
