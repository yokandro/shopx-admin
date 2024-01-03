import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { RoutesMap } from "src/app/routes-map";
import { localStorageOperations } from "src/common/helpers/local-storage";
import { useLoginMutation } from "src/gql/generated.graphql";

export const useAuth = () => {
  const navigate = useNavigate();

  const [loginMutation] = useLoginMutation({
    onCompleted: ({ login }) => {
      localStorageOperations.setAccessToken(login.accessToken);
      localStorageOperations.setRefreshToken(login.refreshToken);
      localStorageOperations.setRefreshTokenExpiry(
        login.refreshTokenExpiry || ""
      );
      navigate(RoutesMap.Products);
    },
    onError: (error) => message.error(error.message),
  });

  const login = (values: { email: string; password: string }) =>
    loginMutation({ variables: values });

  const logout = () => {
    localStorageOperations.setAccessToken("");
    localStorageOperations.setRefreshToken("");
    localStorageOperations.setRefreshTokenExpiry("");
    navigate(RoutesMap.Login);
  };

  return { login, logout };
};
