import { Button, Text as RText } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native'
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

/* Use this if you are using Expo
import * as Svg from 'react-native-svg';
const { Circle, Rect } = Svg;
*/

import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';

const CONTAINER_MOVING = 'CONTAINER_MOVING'

const CIRCLE_MOVING = 'CIRCLE_CHANGE_MOVING'
const CIRCLE_CHANGE_RADIUS = 'CIRCLE_CHANGE_RADIUS'

const containerInitialState = {
  width: 200,
  height: 200,
  marginLeft: 0,
  marginTop: 0,
}

const containerReducer = (state, action) => {
  switch (action.type) {
    case CONTAINER_MOVING:

      return { ...state, ...action.payload };

    default:
      throw new Error('Invalid case!');
  }
}

const circleInitialState = {
  cx: 50,
  cy: 50,
  r: 45,
  stroke: 'blue',
  strokeWidth: 2.5,
  fill: 'green',
}

const circleReducer = (state, action) => {
  switch (action.type) {
    case CIRCLE_MOVING:
      const { cx, cy } = action.payload
      const newCx = cx > 0 ? cx < 200 ? cx : 200 : 0
      const newCy = cy > 0 ? cy < 300 ? cy : 300 : 0
      return { ...state, cx: newCx, cy: newCy };

    default:
      throw new Error('Invalid case!');
  }
}

const DesignScreen = () => {
  const [containerState, containerDispatch] = useReducer(containerReducer, containerInitialState)
  const [circleState, circleDispatch] = useReducer(circleReducer, circleInitialState)
  return (
    <View
      style={{
        width: containerState.width,
        height: containerState.height,
        borderColor: 'red',
        borderWidth: 2,
        marginLeft: containerState.marginLeft,
        marginTop: containerState.marginTop,
      }}

      onStartShouldSetResponderCapture={(e) => {
        containerDispatch({
          type: CONTAINER_MOVING,
          payload: {
            marginLeft: e.nativeEvent.locationX,
            marginTop: e.nativeEvent.locationY,
          }
        })
        return true
      }}
    >
      <ImageBackground
        source={require('../../assets/mockups/t-shirt-male.png')}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              alignItems: 'center', justifyContent: 'center',
            },
          ]}
        >
          <Svg height="170" width="190" style={{ borderWidth: 2, borderColor: 'black' }}>
            <Circle
              onMoveShouldSetResponder={(e) => {
                circleDispatch({
                  type: CIRCLE_MOVING,
                  payload: {
                    cx: e.nativeEvent.locationX,
                    cy: e.nativeEvent.locationY,
                  }
                })
              }}
              cx={circleState.cx}
              cy={circleState.cy}
              r={circleState.r}
              stroke={circleState.stroke}
              strokeWidth={circleState.strokeWidth}
              fill={circleState.fill}
            />
          </Svg>
        </View>
      </ImageBackground>
    </View>
  );
}

export default DesignScreen



