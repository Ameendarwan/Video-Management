import styled from "styled-components";

export const StyledAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: -1.3rem;
  z-index: ${(props) => props.zIndex};
`;
