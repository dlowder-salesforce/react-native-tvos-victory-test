/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import Example1 from './Example1';
import Example2 from './Example2';

class VictoryTest extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedTab: 'Example 1'
    };
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor='white'
        tintColor='red'
        barTintColor='#00a1e0'>
        <TabBarIOS.Item
          title='Example 1'
          selected={this.state && this.state.selectedTab === 'Example 1'}
          onPress={() => {
            this.setState({
              selectedTab: 'Example 1',
            });
          }}>
          <Example1 />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Example 2'
          selected={this.state && this.state.selectedTab === 'Example 2'}
          onPress={() => {
            this.setState({
              selectedTab: 'Example 2',
            });
          }}>
          <Example2 />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  } 

}

AppRegistry.registerComponent('VictoryTest', () => VictoryTest);
