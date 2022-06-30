import styled from "styled-components";

export const StyledCustomTitle = styled.h2<{ isBold: boolean }>`
  font-size: 50px;
  color: ${(props) => (props.isBold ? "red" : "blue")};
`;

export const StyledSubTitle = styled.h2`
  font-size: 20px;
  font-weight: bolder;
`;
