import React, {Component} from 'react';
import {Tabs} from 'native-base';
import Live from '../pages/Live';

export class TabMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs colorScheme="orange">
        <Tabs.Bar>
          <Tabs.Tab>ON AIR</Tabs.Tab>
          <Tabs.Tab>CAST</Tabs.Tab>
          <Tabs.Tab>TALK</Tabs.Tab>
        </Tabs.Bar>
        <Tabs.Views>
          <Tabs.View>
            <Live navigation={this.props.navigation} />
          </Tabs.View>
          <Tabs.View>CAST</Tabs.View>
          <Tabs.View>TALK</Tabs.View>
        </Tabs.Views>
      </Tabs>
    );
  }
}
