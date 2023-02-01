import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Heading = styled.h1`
  font-size: var(--large);
`;

export const Body = styled.div`
  display: flex;
  max-width: 600px;
  font-size: calc(var(--medium) - 1rem);
  text-align: center;
  max-height: 400px;
  overflow: auto;

  a {
  }
`;
