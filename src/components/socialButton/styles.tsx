import styled from "@emotion/styled";

export const Container = styled.a`
  text-decoration: none;
  background: #131313;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.4rem;
  color: var(--color-80);
  font-family: "Poppins";
  text-transform: uppercase;
  font-weight: 300;
  font-size: 2rem;
  line-height: 3.2rem;
  letter-spacing: 0.07em;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
