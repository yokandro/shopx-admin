import { Button, Form } from "antd";
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledForm = styled(Form)`
  max-width: 420px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const StyledLoginButton = styled(Button)`
  align-self: center;
  width: 100%;
`;
