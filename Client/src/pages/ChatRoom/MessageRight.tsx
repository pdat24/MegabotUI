import styled from "@emotion/styled";

function MessageRight({ children }: { children: string }) {
    const Component = styled.div`
        background: var(--color-primary);
        width: max-content;
        padding: 8px 14px;
        border-radius: 24px;
        font-size: 16px;
        margin-left: auto;
        max-width: 90%;
        line-break: anywhere;
        line-height: 22px;
        margin-bottom: 8px;
    `;
    return <Component>{children}</Component>;
}

export default MessageRight;
