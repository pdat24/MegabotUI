import { Header } from "~/components";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import style from "./FAQ.module.css";
import clsx from "clsx";
import { useRef } from "react";

function Question({ q, index }: { q: string; index: number }) {
    let expanded = false;
    const expandIcon = useRef<HTMLSpanElement>(null);
    const handleExpand = () => {
        if (!expanded) {
            expandIcon.current!.style.transform = "rotate(180deg)";
            expanded = true;
        } else {
            expandIcon.current!.style.transform = "rotate(0)";
            expanded = false;
        }
    };
    return (
        <div key={index} className="accordion mb-3" id={"accordionExample" + index}>
            <div className={clsx("accordion-item", style.FAQitem)}>
                <h2 className="accordion-header">
                    <button
                        className={clsx("accordion-button", style.FAQBtn)}
                        type="button"
                        onClick={handleExpand}
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapseOne" + index}
                        aria-expanded="true"
                        aria-controls={"collapseOne" + index}
                    >
                        {q}
                        <span ref={expandIcon} className={style.expandIcon}>
                            <ExpandMoreRoundedIcon />
                        </span>
                    </button>
                </h2>
                <div
                    id={"collapseOne" + index}
                    className="accordion-collapse collapse"
                    data-bs-parent={"#accordionExample" + index}
                >
                    <div className={clsx("accordion-body", style.text)}>
                        This is the first item's accordion body. It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each element.
                        <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    );
}

function Faq() {
    const qs = [
        "Is there a limit to the amount of stuff I can create?",
        "What languages do you support?",
        "Is it beneficial to a digital marketer or a content writer?",
        "How long would it take to write an article with AI?",
        "Is the content unique?",
    ];

    return (
        <div className={style.wrapper}>
            <Header title="FAQ" />
            <div className={style.bodyWrapper} style={{ minHeight: "100vh" }}>
                <div className={clsx("container", style.container)}>
                    <div className={clsx("card", style.content)}>
                        <div className={clsx("card-header", style.tableHeader)}>
                            <h3>FAQ</h3>
                        </div>
                        <div className="card-body light-text">
                            {qs.map((q, index) => (
                                <Question q={q} key={index} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
