import axios from 'axios';
import qs from 'qs';
import parse from 'parse-link-header';

export const connection = axios.create();

connection.defaults.baseURL = 'https://kr-api.spooncast.net';
connection.defaults.headers.common['Content-Type'] = 'application/json';
connection.defaults.responseType = 'json';
connection.defaults.paramsSerializer = params =>
  qs.stringify(params || {}, {arrayFormat: 'repeat', allowDots: true});

// 요청 인터셉터
connection.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error), // 오류 요청을 보내기전 수행할 일
);

// 응답 인터셉터
connection.interceptors.response.use(
  response => {
    const {
      status,
      data: {next, results},
    } = response;

    switch (status) {
      case 200:
        // Pagination 링크를 파싱해서 값을 리턴해준다.
        return {link: next, results};
      case 201:
      default:
        return response;
    }
  },
  err => {
    const {status, data} = err.response;
    console.error(status);
    console.error(data);

    return Promise.reject({status, data});
  },
);

export default connection;
