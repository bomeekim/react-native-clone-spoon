import React, {Component} from 'react';
import {TodayDJ} from '../components/live/TodayDJ';
import {ListWithTitle} from '../components/ListWithTitle';
import LIVE_API from '../api/live';

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      navigation: props.navigation,
      spoonPickLiveList: [],
      topRankingList: [],
      topRankingCategoryList: [
        {index: 0, type: 'daily', title: '최근 1일 Top 100'},
        {index: 1, type: 'weekly', title: '최근 7일 Top 100'},
        {index: 2, type: 'monthly', title: '이번달 Top 100'},
      ],
      todayDjInfo: {},
    };
  }

  /**
   * 날짜 조회 필터링 타입으로 스푼 라이브 디제이 순위를 가져온다.
   * @param dateType 최근 1일(daily), 최근 7일(weekly), 이번 달(monthly)
   * @returns {Promise<void>}
   */
  async getTopRankingListByDateType(dateType) {
    try {
      const {results} = await LIVE_API.RANKS(dateType);

      if (!!results && results.length > 0) {
        const {
          author: {id, nickname, profile_url, description},
        } = results[0];

        this.setState({
          topRankingList: results,
          todayDjInfo: {
            id,
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
          spoonPickLiveList: results.map(obj => {
            return {
              imageUrl: obj.img_url.replace('http', 'https'),
              title: obj.title,
              subTitle: obj.author.nickname,
              description: '#'.concat(obj.tags.join(' #')),
              author: obj.author,
              id: obj.id,
            };
          }),
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleSpoonPickLiveListItemClick(item, index) {
  }

  handleTopRankingListItemClick(item, index) {
  }

  async componentDidMount() {
    // 스푼 파트너, 초이스, pick 라이브 방송 목록 조회
    await this.getSpoonPickLiveList();

    // 데일리 라이브 순위 조회
    await this.getTopRankingListByDateType('daily');
  }

  render() {
    const {spoonPickLiveList, topRankingCategoryList, todayDjInfo} = this.state;

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

        {/*스푼이 선정한 DJ*/}
        {spoonPickLiveList.length > 0 && (
          <ListWithTitle
            title="스푼이 선정한 DJ"
            list={spoonPickLiveList}
            onClick={this.handleSpoonPickLiveListItemClick}
          />
        )}

        {/*인기차트*/}
        {/*TODO 인기차트로 이동*/}
        <ListWithTitle
          title="인기차트"
          list={topRankingCategoryList}
          sliderWidth="150"
          itemWidth="150"
          onClick={this.handleTopRankingListItemClick}
        />
      </>
    );
  }
}

export default Live;
