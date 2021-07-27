import connection from './index';

const CAST_API = {
  /**
   * 스푼캐스트 최근 7일 TOP 100 조회 API
   */
  TOP: () => connection.get('/ranks/cast?v=2&page_size=10'),
};

export default CAST_API;
