import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.4rem 1rem;
  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 3px;
  letter-spacing: 1.1px;

  ${(props) =>
    props.grey &&
    css`
      background: ${(props) => props.theme.darkGrey};
      border: 1px solid ${(props) => props.theme.darkGrey};
      color: ${(props) => props.theme.secondaryColor};
    `}
`;

export default Button;
