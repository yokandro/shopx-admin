import { jwtDecode } from "jwt-decode";

const isAccessTokenExpired = (
  accessToken: string,
  tolerance = 5000
): boolean => {
  if (!accessToken) {
    return true;
  }
  try {
    const decodedJwt: { exp: number } = jwtDecode(accessToken);

    return decodedJwt.exp * 1000 <= Date.now() + tolerance;
  } catch {
    return false;
  }
};

const fetchAccessToken = async (
  url: string,
  refreshToken: string
): Promise<any> => {
  if (!refreshToken) {
    return Promise.reject(new Error("Refresh token not found"));
  }
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Refresh: refreshToken,
    },
    body: JSON.stringify({
      query: `
            mutation refreshTokens {
              refreshTokens {
                accessToken
                refreshToken
                refreshTokenExpiry
              }
            }`,
    }),
  });

  const { data, errors } = await res.json();
  if (errors?.length) {
    return Promise.reject(errors[0]);
  }
  return data?.refreshTokens;
};

export { isAccessTokenExpired, fetchAccessToken };
