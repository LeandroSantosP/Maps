import styled from "styled-components";

export const Wrapper = styled.main`
  position: fixed;
  right: calc(var(--medium) - 1.5rem);
  top: calc(var(--medium) - 1.5rem);
  color: var(--white);
  z-index: 1100;

  svg {
    color: var(--white);
    transition: color 0.3 ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`;
