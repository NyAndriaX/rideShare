export const PUBLIC_URL = import.meta.env.VITE_APP_PUBLIC_URL as string;

export const BASE_URL = import.meta.env.VITE_APP_BASE_API as string;

export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const CIN_REGEX = /^\d{12}$/;