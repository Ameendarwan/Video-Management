import styled from "styled-components";

export const Layout = styled.main`
  display: grid;
  grid-template-columns: 8rem 1fr;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
