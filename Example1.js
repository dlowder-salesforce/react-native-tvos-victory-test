/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryScatter,
  VictoryBrushContainer,
  VictoryZoomContainer,
} from 'victory-native';

import {
  range
} from 'range';

var graphWidth = Platform.isTVOS ? 1700 : 400;
var mainGraphHeight = Platform.isTVOS ? 900: 700;
var spotSize = Platform.isTVOS ? 30 : 6;

var random = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

class Example1 extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: this.getScatterData()
  }

  getScatterData() {
    return range(50).map((index) => {
      return {
        x: random(1, 50),
        y: random(10, 90),
        size: spotSize 
      };
    });
  }

  render() {
    return (
      <VictoryChart width={graphWidth} height={mainGraphHeight}
        domain={{y: [0, 100]}}
        containerComponent={<VictoryZoomContainer zoomDomain={{x: [5, 35], y: [0, 100]}}/>}
      >
        <VictoryScatter
          data={this.state.data}
          style={{
            data: {
              opacity: (d) =>  d.y % 5 === 0 ? 1 : 0.7,
              fill: (d) => d.y % 5 === 0 ? "tomato" : "black"
            }
          }}
        />
      </VictoryChart>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = Example1;
