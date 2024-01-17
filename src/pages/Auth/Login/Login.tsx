import { useMemo } from "react";
import { Form, Input, Typography } from "antd";
import { useLocation } from "react-router-dom";
import qs from "qs";

import { useAuth } from "src/common/hooks/useAuth/useAuth";

import { FormWrapper, StyledForm, StyledLoginButton } from "./Login.styles";
import { LoginFormFields } from "./constants";

const Login = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();
  const location = useLocation();

  const { token } = useMemo(
    () => qs.parse(location.search.slice(1)),
    [location]
  );

  return (
    <FormWrapper>
      <StyledForm form={form} onFinish={(values: any) => login(values)}>
        <Typography.Title
          style={{
            alignSelf: "center",
          }}
          level={2}
        >
          ShopX
        </Typography.Title>
        <Form.Item
          name={LoginFormFields.Email}
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email" },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name={LoginFormFields.Password}
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="confirmPassword" label="Confirm password" rules={[]}>
          <Input.Password />
        </Form.Item>
        <StyledLoginButton type="primary" htmlType="submit">
          Log in
        </StyledLoginButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Login;
