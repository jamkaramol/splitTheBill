import React from "react";
import { NativeModules, LayoutAnimation, TouchableOpacity } from "react-native";
import { View, Text, Button } from "native-base";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Result extends React.Component {
  state = {
    j: "space-around",
    wrap: "wrap",
    flexD: "row",
    x: '-10deg',
    y: '45deg',
    z:'-10deg'
  };

  _onPress = (key) => {
    LayoutAnimation.spring();
    this.setState({
      wrap: this.state.wrap === "wrap" ? "wrap-reverse" : "wrap", 
    })
  }

  render() {
    const { allList } = this.props;
    const { wrap, j, flexD , x, y, z} = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: flexD,
          flexWrap: wrap,
          justifyContent: j,
          alignItems: "center",
          transform: [
            {rotateX:x},
            {rotateY:y},
            {rotateZ:z}],
          height: 300,
          padding:20,
          marginTop: 40
        }}
      >
        {allList.length > 1 &&
          allList.map((list, key) => {
            if (key % 2) {
              return (
                <TouchableOpacity onPress={() => this._onPress(key)}>
                  <Button rounded success>
                    <Text>{list}</Text>
                  </Button>
                  </TouchableOpacity>
              ); 
            } else {
              return (
                <TouchableOpacity onPress={() => this._onPress(key)}>
                  <Button rounded info>
                    <Text>{list}</Text>
                  </Button>
                  </TouchableOpacity>
              );  
            }
          })}
      </View>
    );
  }
}
