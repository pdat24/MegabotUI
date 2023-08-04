import styled from "@emotion/styled";

function MessageLeft({ children }: { children: string }) {
    const Component = styled.div`
        width: max-content;
        padding: 8px 14px;
        border-radius: 24px;
        font-size: 16px;
        max-width: 90%;
        line-break: anywhere;
        line-height: 22px;
        margin-bottom: 8px;
        background: rgba(var(--content-color), 0.25);
        color: rgba(var(--title-color), 0.6);
    `;
    return <Component>{children}</Component>;
}

export default MessageLeft;
