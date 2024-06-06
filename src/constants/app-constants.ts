export const PUBLIC_URL = import.meta.env.VITE_APP_PUBLIC_URL as string;

export const BASE_URL = import.meta.env.VITE_APP_BASE_API as string;

export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const CIN_REGEX = /^\d{12}$/;

export const FIREBASE_API_KEY = import.meta.env.VITE_APP_FIREBASE_API_KEY as string;

export const FIREBASE_AUTH_DOMAINE = import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAINE as string;

export const FIREBASE_PROJECT_ID = import.meta.env.VITE_APP_FIREBASE_PROJECT_ID as string

export const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET as string;

export const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID as string;

export const FIREBASE_APP_ID = import.meta.env.VITE_APP_FIREBASE_APP_ID as string