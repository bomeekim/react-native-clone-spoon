import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Card} from './Card';
import {Pressable} from 'native-base';

export class CarouselCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: props.entries,
      sliderWidth: props.sliderWidth || 300,
      itemWidth: props.itemWidth || 300,
      activeIndex: 0,
    };
  }

  _renderItem = ({item, index}) => {
    const url = item.imageUrl
      ? item.imageUrl
      : 'https://source.unsplash.com/400x400/?food';
    return (
      <Pressable onPress={() => this.props.onClick(item, index)}>
        <Card
          imageUrl={url}
          title={item.title}
          subTitle={item.subTitle}
          description={item.description}
        />
      </Pressable>
    );
  };

  render() {
    const {entries, sliderWidth, itemWidth} = this.state;

    return (
      <Carousel
        layout={'default'}
        ref={c => {
          this.carousel = c;
        }}
        data={entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={index => this.setState({activeIndex: index})}
      />
    );
  }
}
