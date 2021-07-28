import React, {Component} from 'react';
import {TodayDJ} from '../components/live/TodayDJ';
import {ListWithTitle} from '../components/ListWithTitle';
import LIVE_API from '../api/live';

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      spoonPickLiveList: [],
      liveDjRankList: [],
      todayDjInfo: {},
    };
  }

  /**
   * 날짜 조회 필터링 타입으로 스푼 라이브 디제이 순위를 가져온다.
   * @param dateType 최근 1일(daily), 최근 7일(weekly), 이번 달(monthly)
   * @returns {Promise<void>}
   */
  async getLiveDjRankListByDateType(dateType) {
    try {
      const {results} = await LIVE_API.RANKS(dateType);

      if (!!results && results.length > 0) {
        const {
          author: {nickname, profile_url, description},
        } = results[0];

        this.setState({
          liveDjRankList: results,
          todayDjInfo: {
            nickname,
            imageUrl: profile_url.replace('http', 'https'),
            description,
          },
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 스푼 파트너, 초이스, Pick 라이브 방송 목록을 가져온다.
   * @returns {Promise<{results}|AxiosResponse<any>>}
   */
  async getSpoonPickLiveList() {
    try {
      const {results} = await LIVE_API.SPOON_PICK_LIST();

      if (!!results && results.length > 0) {
        this.setState({
          isLoading: false,
          spoonPickLiveList: results,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidMount() {
    // 스푼 파트너, 초이스, pick 라이브 방송 목록 조회
    await this.getSpoonPickLiveList();

    // 데일리 라이브 순위 조회
    await this.getLiveDjRankListByDateType('daily');
  }

  render() {
    const {spoonPickLiveList, todayDjInfo} = this.state;

    return (
      <>
        {/*오늘의 DJ*/}
        {todayDjInfo && todayDjInfo.imageUrl && (
          <TodayDJ
            name={todayDjInfo.nickname}
            imageUrl={todayDjInfo.imageUrl}
            description={todayDjInfo.description}
          />
        )}

        {spoonPickLiveList.length > 0 && (
          <ListWithTitle title="스푼이 선정한 DJ" list={spoonPickLiveList} />
        )}
      </>
    );
  }
}

export default Live;
