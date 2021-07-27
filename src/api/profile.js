import connection from './index';

const PROFILE_API = {
  /**
   * 스푼캐스트 유저 프로필 조회 API
   * @param userId 스푼캐스트 유저 아이디
   * @constructor
   */
  GET_USER_PROFILE: userId => connection.get(`/users/${userId}`),
  /**
   * 스푼캐스트 유저의 팔로잉 목록 조회 API
   * @param userId 스푼캐스트 유저 아이디
   * @param params 조회 쿼리 파라미터
   */
  FOLLOWING_LIST: (userId, params) =>
    connection.get(`/users/${userId}/followings`, {params}),
};

export default PROFILE_API;
