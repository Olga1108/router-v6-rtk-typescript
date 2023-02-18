const env = {
  development: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'olga6104959@gmail.com',
    PASSWORD: 'react'
  },
  production: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'olga6104959@gmail.com',
    PASSWORD: 'react'
  },
  test: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'olga6104959@gmail.com',
    PASSWORD: 'react'
  },
};

export const env_var = env[process.env.NODE_ENV];