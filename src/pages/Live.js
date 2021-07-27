import React, {Component} from 'react';
import TodayDJ from '../components/live/TodayDJ';
import {ListWithTitle} from '../components/ListWithTitle';
import LIVE_API from '../api/live';

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      spoonPickLiveList: [],
      nextLink: null,
    };
  }

  /**
   * 스푼 파트너, 초이스, Pick 라이브 방송 목록을 가져온다.
   * @returns {Promise<{results}|AxiosResponse<any>>}
   */
  async getSpoonPickLiveList() {
    try {
      const response = await LIVE_API.SPOON_PICK_LIST();

      if (!!response.results && response.results.length > 0) {
        return response;
      }
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    // 스푼 파트너, 초이스, pick 라이브 방송 목록 조회
    this.getSpoonPickLiveList().then(response => {
      this.setState({
        isLoading: false,
        nextLink: response.link,
        spoonPickLiveList: response.results,
      });
    });
  }

  render() {
    const {spoonPickLiveList} = this.state;

    return (
      <>
        {/*오늘의 DJ*/}
        <TodayDJ name="웰치즈" subTitle="오늘의 픽!" subscription="예쓰!" />

        {spoonPickLiveList.length > 0 && (
          <ListWithTitle
            title="스푼이 선정한 DJ"
            list={this.state.spoonPickLiveList}
          />
        )}
      </>
    );
  }
}

export default Live;
