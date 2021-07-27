import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import Card from './Card';

export class CarouselCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: props.entries,
    };
  }

  _renderItem = ({item, index}) => {
    const props = {
      imageUrl: item.img_url.replace('http', 'https'),
      title: item.title,
      subTitle: item.author.nickname,
      subscription: '#'.concat(item.tags.join(' #')),
    };

    return (
      <Card
        imageUrl={props.imageUrl}
        title={props.title}
        subTitle={props.subTitle}
        subscription={props.subscription}
      />
    );
  };

  render() {
    const {entries} = this.state;

    return (
      <Carousel
        layout={'default'}
        ref={c => {
          this.carousel = c;
        }}
        data={entries}
        renderItem={this._renderItem}
        sliderWidth={300}
        itemWidth={300}
      />
    );
  }
}
