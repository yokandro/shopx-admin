import { Avatar, Layout } from "antd";
import styled from "styled-components";

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

  h3 {
    margin-bottom: 0;
  }
`;

export const StyledAvatar = styled(Avatar)`
  background-color: grey;
`;
