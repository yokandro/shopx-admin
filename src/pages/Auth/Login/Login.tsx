import { Form, Input, Typography } from "antd";

import { useAuth } from "src/common/hooks/useAuth/useAuth";

import { FormWrapper, StyledForm, StyledLoginButton } from "./Login.styles";
import { LoginFormFields } from "./constants";

const Login = () => {
  const [form] = Form.useForm();
  const { login } = useAuth();

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
        <StyledLoginButton type="primary" htmlType="submit">
          Log in
        </StyledLoginButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Login;
