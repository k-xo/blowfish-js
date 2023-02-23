import axios from 'axios';

// const BASE_URL = 'https://api.blowfish.xyz/';

const BASE_URL = 'https://free.api.blowfish.xyz/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function setApiKey(apiKey: string) {
  api.defaults.headers.common['X-API-KEY'] = apiKey;
}

export function getOriginDappUrl(url: string) {
  return new URL(url).origin;
}
