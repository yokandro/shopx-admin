import { useMemo } from "react";
import { Form, Input, Typography } from "antd";
import { useLocation } from "react-router-dom";
import qs from "qs";

import { useAuth } from "src/common/hooks/useAuth/useAuth";

import { FormWrapper, StyledForm, StyledLoginButton } from "./Login.styles";
import { LoginFormFields } from "./constants";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();
  const location = useLocation();

  const { token } = useMemo(
    () => qs.parse(location.search.slice(1)),
    [location]
  );

  const data = useMemo(
    () => (token ? jwtDecode(token as string) : undefined),
    [token]
  );

  return (
    <FormWrapper>
      <StyledForm
        form={form}
        onFinish={(values: any) => login(values)}
        layout="vertical"
        initialValues={data}
      >
        <Typography.Title
          style={{
            alignSelf: "center",
          }}
          level={2}
        >
          ShopX
        </Typography.Title>
        <Form.Item
          label="Email"
          name={LoginFormFields.Email}
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Invalid email" },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={LoginFormFields.Password}
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item
          hidden={!token}
          name="confirmPassword"
          label="Confirm password"
          rules={
            token
              ? [
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]
              : []
          }
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>
        <StyledLoginButton type="primary" htmlType="submit">
          Log in
        </StyledLoginButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Login;
