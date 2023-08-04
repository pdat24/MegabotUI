/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const dialog = css`
    background-color: #26292c;
    padding: 15px;
`;
const entry = css`
    background: rgba(var(--title-color), 0.1) !important;
    color: #fff !important;
    border-radius: 4px;
    border: none;
    padding: calc(10px + 3 * (100vw - 320px) / 1600) calc(15px + 3 * (100vw - 320px) / 1600);
    -webkit-box-shadow: none;
    box-shadow: none !important;
    outline: none;
    color: rgba(var(--content-color), 1);
    ::placeholder {
        color: #fff;
    }
`;
const stars = css`
    color: rgb(255, 184, 0);
    font-size: 30px;
`;

function RateModal() {
    return (
        <div>
            <div
                className="modal fade"
                id="RateModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" css={dialog}>
                        <div className="modal-header border-0">
                            <h1 className="modal-title fs-5 text-white" id="staticBackdropLabel">
                                Your Rating
                            </h1>
                            <HighlightOffOutlinedIcon
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                css={css`
                                    cursor: pointer;
                                `}
                                className="color-primary"
                            />
                        </div>
                        <div className="modal-body">
                            <div>
                                <label
                                    htmlFor="review"
                                    className="form-label color-primary"
                                    css={css`
                                        font-size: 14px;
                                    `}
                                >
                                    Type Something
                                </label>
                                <textarea
                                    placeholder="Write your review"
                                    className="form-control"
                                    css={entry}
                                    id="review"
                                    rows={3}
                                ></textarea>
                            </div>
                            <div className="d-flex mt-2">
                                <StarRateRoundedIcon css={stars} />
                                <StarRateRoundedIcon css={stars} />
                                <StarRateRoundedIcon css={stars} />
                                <StarRateRoundedIcon css={stars} />
                                <StarRateRoundedIcon css={stars} />
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            <button className="btn btn-primary common-btn3">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RateModal;
