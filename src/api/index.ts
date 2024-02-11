import axios from 'axios';
import endpoints from './endpoints.json';

interface Endpoints {
  [key: string]: string;
}

type Key = keyof Endpoints | (keyof Endpoints)[];

const paths: Endpoints = endpoints;

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL!,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getUrl = (keys: Key, id?: string) => {
  const isArray = Array.isArray(keys);
  const isMultipleKeys = isArray && 1 < keys.length;

  let path =
    !isMultipleKeys && isArray ? paths[keys[0]] : paths[keys as string];

  const hasInvalidKey = isMultipleKeys && keys.some((key) => !paths[key]);

  if (isMultipleKeys && !hasInvalidKey) {
    const hydratedPath = keys.map((key) => paths[key]);
    path = id ? hydratedPath.join(`/${id}`) : hydratedPath.join('');
  }

  if (!isMultipleKeys && path && id) {
    path = `${path}/${id}`;
  }

  if (!path) {
    const errorMessage =
      'Error while building the request path. Check if you are using a valid key.';

    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return path;
};
