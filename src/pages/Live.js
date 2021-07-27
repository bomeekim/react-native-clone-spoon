import React, {Component} from 'react';
import {Box, HStack, VStack, Center, Text, Button, Heading} from 'native-base';
import TodayDJ from '../components/live/TodayDJ';
import {CarouselCard} from '../components/CarouselCard';
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

  spoonPickLiveListItems() {
    if (this.state.isLoading) {
      return <Text>로딩 중</Text>;
    } else {
      console.log(123123);
      return <CarouselCard entries={this.state.spoonPickLiveList} />;
    }
  }

  componentDidMount() {
    this.getSpoonPickLiveList().then(response => {
      this.setState({
        isLoading: false,
        nextLink: response.link,
        spoonPickLiveList: response.results,
      });
    });
  }

  render() {
    return (
      <>
        <Box flex={1}>
          <VStack>
            {/*Header*/}
            <HStack justifyContent="space-between">
              <HStack alignItems="center">
                <Heading size="md">스푼PICK DJ</Heading>
                <Button
                  size="sm"
                  variant="link"
                  onPress={() => console.log('hello world')}>
                  더보기
                </Button>
              </HStack>
            </HStack>
            <Center>{this.spoonPickLiveListItems()}</Center>
          </VStack>
        </Box>
        {/*<TodayDJ name="웰치즈" subTitle="오늘의 픽!" subscription="예쓰!" />*/}
      </>
    );
  }
}

export default Live;
