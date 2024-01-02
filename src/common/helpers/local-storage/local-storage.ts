import { LocalStorageKeys } from "./constants";

export const setAccessToken = (token: string) => {
  localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, token);
};
export const setRefreshToken = (token: string) => {
  localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN, token);
};
export const setRefreshTokenExpiry = (expiry: string) => {
  localStorage.setItem(LocalStorageKeys.REFRESH_TOKEN_EXPIRY, expiry);
};

export const getAccessToken = () =>
  localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN);
export const getRefreshToken = () =>
  localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN);
export const getRefreshTokenExpiry = () =>
  localStorage.getItem(LocalStorageKeys.REFRESH_TOKEN_EXPIRY);
