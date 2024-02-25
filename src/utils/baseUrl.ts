function getBaseUrl() {
  return import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;
}

export { getBaseUrl };
