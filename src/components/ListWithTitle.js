import React, {Component} from 'react';
import {Box, Button, Center, Heading, HStack, VStack} from 'native-base';
import {CarouselCard} from './CarouselCard';

export class ListWithTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      list: props.list,
    };
  }

  render() {
    return (
      <>
        <Box flex={1}>
          <VStack>
            <HStack justifyContent="space-between">
              <HStack alignItems="center">
                <Heading size="md">{this.state.title}</Heading>
                <Button
                  size="sm"
                  variant="link"
                  // TODO 더보기 이벤트 연결
                  onPress={() => console.log('hello world')}>
                  더보기
                </Button>
              </HStack>
            </HStack>
            <Center>
              <CarouselCard entries={this.state.list} />
            </Center>
          </VStack>
        </Box>
      </>
    );
  }
}
