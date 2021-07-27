import React from 'react';
import {Tabs} from 'native-base';
import Live from '../pages/Live';

function TabMenu() {
  return (
    <Tabs colorScheme="orange">
      <Tabs.Bar>
        <Tabs.Tab>ON AIR</Tabs.Tab>
        <Tabs.Tab>CAST</Tabs.Tab>
        <Tabs.Tab>TALK</Tabs.Tab>
      </Tabs.Bar>
      <Tabs.Views>
        <Tabs.View>
          <Live />
        </Tabs.View>
        <Tabs.View>CAST</Tabs.View>
        <Tabs.View>TALK</Tabs.View>
      </Tabs.Views>
    </Tabs>
  );
}

export default TabMenu;


