/**@jsxImportSource @emotion/react */
import { Header } from "~/components";
import style from "./Subcription.module.css";
import clsx from "clsx";
import weekly from "~/assets/imgs/weekly.svg";
import monthly from "~/assets/imgs/monthly.svg";
import yearly from "~/assets/imgs/yearly.svg";
import { css } from "@emotion/react";

const noName = css`
    background: #303f47 !important;
    color: var(--color-primary) !important;
`;

function Premium() {
    return (
        <div className={style.wrapper}>
            <Header title="Subscription" />
            <div className={style.bodyWrapper} style={{ minHeight: "100vh" }}>
                <div className={clsx("container", style.container)}>
                    <div className={clsx("card", style.content)}>
                        <div className={clsx("card-header", style.tableHeader, style.subcHeader)}>
                            <h4>Choose Period of Plan :</h4>
                            <div className="d-flex align-items-center gap-3">
                                <span>Currency:</span>
                                <select defaultValue="1" name="currency" className={clsx("form-select", style.select)}>
                                    <option value="1">Us Dollar</option>
                                    <option value="2">Euro</option>
                                    <option value="3">Vnd</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-body light-text row">
                            <div className="col-xl-4 col-md-6 col-12">
                                <div className={clsx("card", style.priceCard)}>
                                    <div className={clsx("card-header", style.cardHeader)}>
                                        <img src={weekly} alt="photo" />
                                        <span>Weekly Plan</span>
                                    </div>
                                    <div className={clsx("light-text card-body", style.cardBody)}>
                                        <h5 className="mb-4 color-primary text-center fw-bold">$3.99 only/-</h5>
                                        <ul className={style.benefit}>
                                            <li className="mb-3">Intelligent AI chatbot</li>
                                            <li className="mb-3">Unlimited answer of question</li>
                                            <li className="mb-3">Avoid buying coin forever</li>
                                            <li className="mb-3">No ad in background</li>
                                            <li className="mb-3">Early access to new features</li>
                                        </ul>
                                        <div className="d-flex justify-content-center">
                                            <button className={clsx("common-btn3 btn", style.selectbtn)}>
                                                <span>Select this plan</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-12">
                                <div className={clsx("card", style.priceCard)}>
                                    <div className={clsx("card-header", style.cardHeader)}>
                                        <img src={monthly} alt="photo" />
                                        <span>Monthly Plan</span>
                                    </div>
                                    <div className={clsx("light-text card-body", style.cardBody)}>
                                        <h5 className="mb-4 color-primary text-center fw-bold">$3.99 only/-</h5>
                                        <ul className={style.benefit}>
                                            <li className="mb-3">Intelligent AI chatbot</li>
                                            <li className="mb-3">Unlimited answer of question</li>
                                            <li className="mb-3">Avoid buying coin forever</li>
                                            <li className="mb-3">No ad in background</li>
                                            <li className="mb-3">Early access to new features</li>
                                        </ul>
                                        <div className="d-flex justify-content-center">
                                            <button className={clsx("common-btn3 btn", style.selectbtn)} css={noName}>
                                                <span>Select this plan</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-12">
                                <div className={clsx("card", style.priceCard)}>
                                    <div className={clsx("card-header", style.cardHeader)}>
                                        <img src={yearly} alt="photo" />
                                        <span>Lifetime Plan</span>
                                    </div>
                                    <div className={clsx("light-text card-body", style.cardBody)}>
                                        <h5 className="mb-4 color-primary text-center fw-bold">$3.99 only/-</h5>
                                        <ul className={style.benefit}>
                                            <li className="mb-3">Intelligent AI chatbot</li>
                                            <li className="mb-3">Unlimited answer of question</li>
                                            <li className="mb-3">Avoid buying coin forever</li>
                                            <li className="mb-3">No ad in background</li>
                                            <li className="mb-3">Early access to new features</li>
                                        </ul>
                                        <div className="d-flex justify-content-center">
                                            <button className={clsx("common-btn3 btn", style.selectbtn)} css={noName}>
                                                <span>Select this plan</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="common-btn3"
                                    css={css`
                                        ${noName}
                                        width: max-content;
                                        padding: 16px 32px;
                                        gap: 4px;
                                        color: var(--light-color);
                                        border: 1px sold var(--color-primary);
                                    `}
                                >
                                    Continue
                                </button>
                                <a href="#" className={style.bottomLink}>
                                    Continue with limited version
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Premium;
