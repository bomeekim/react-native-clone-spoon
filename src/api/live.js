import connection from './index';

const LIVE_API = {
  /**
   * 스푼 파트너, 초이스, Pick 라이브 목록 조회 API
   * @returns {Promise<AxiosResponse<any>>}
   * @constructor
   */
  SPOON_PICK_LIST: () =>
    connection.get('/lives/tier/?page_size=6&tier_names=Partner,Choice,Pick'),

  /**
   * 라이브 순위 조회 API
   * @param type 최근 1일(daily), 최근 7일(weekly), 이번 달(monthly)
   * @returns {Promise<AxiosResponse<any>>}
   * @constructor
   */
  RANKS: type => connection.get(`/ranks/livebj/?date_type=${type}`),
};

export default LIVE_API;
