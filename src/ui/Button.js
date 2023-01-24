import styled from "styled-components";

const StyledButton = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    color: white;
    background-color: black;
    cursor: pointer;`


export function Button({loading, ...rest}) {
    return(
        <StyledButton {...rest} disabled={loading}>
            {loading ? "저장중입니다..." : rest.children}
        </StyledButton>
    );
}