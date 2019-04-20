import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Item,
  Input,
  View,
  Toast
} from "native-base";
import PersonPicker from "../Components/PersonPicker.component";
import Result from "../Components/Result.component";

const icon_wrong = "close-circle";
const icon_correct = "checkmark-circle";
const ERROR_MESSAGE = "Please enter a number";

import { NativeModules, LayoutAnimation, TouchableOpacity } from "react-native";
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class GetAmount extends Component {
  static navigationOptions = {
    title: "Split the bill"
  };

  constructor(props) {
    super(props);
    this.state = {
      price: "",
      iconText: "",
      errorMessage: "",
      persons: 2,
      each: 0,
      showToast: false,
      allList: []
    };
  }

  setPriceHandler = price => {
    if (!isNaN(price)) {
      this.setState({ price, iconText: icon_correct, errorMessage: "" });
    } else {
      this.setState({
        price: "0",
        iconText: icon_wrong,
        errorMessage: ERROR_MESSAGE
      });
    }
  };

  calculateHandler = () => {
    let { price, persons } = this.state;
    if (price) {
      price = Number(price);
      persons = Number(persons);
      let foraEachPrice = Number(price / persons);
      let eachAmount = Number(foraEachPrice.toFixed(2));
      let list = [];
      for (let i = 0; i < persons; i++) {
        list.push(eachAmount);
      }
      LayoutAnimation.spring();
      this.setState({ each: eachAmount, allList: list });
    } else {
      Toast.show({
        text: "Please select Amount and persons",
        buttonText: "Okay",
        duration: 3000,
        type: "danger"
      });
    }

  };
  onValueChange2 = (value: string) => {
    this.setState({
      persons: value
    });
  };

  resetHandler = () => {
    this.setState({
      price: "",
      iconText: "",
      errorMessage: "",
      persons: 1,
      each: 0,
      showToast: false,
      allList:[]
    });
  };


  render() {
    const { price, iconText, errorMessage, each, persons, allList } = this.state;
    return (
      <Container>
        <Content
          style={{
            padding: 10,
            backgroundColor: "#A9DAD6",
          }}
        >
          <View
            style={{backgroundColor: "#f8f8f8", padding: 10, borderRadius: 5 }}
          >
            <View style={{flex: 1, flexDirection: "row"}}>
              <Text style={{flex: 1}}>
                Enter Amount
              </Text>
              <Item style={{flex: 1}}>
              <Input
                onChangeText={text => this.setPriceHandler(text)}
                value={price}
              />
              <Icon name={iconText} />
            </Item>
            </View>
            <PersonPicker
              selectHandler={this.onValueChange2}
              persons={persons}
            />
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Button style={{flex: 1}}block info onPress={this.calculateHandler}>
                <Icon name="calculator" />
                <Text>Calculate </Text>
              </Button>
              <Button style={{flex: 1}} block warning onPress={this.resetHandler}>
              <Icon name="refresh" />
                <Text>Reset</Text>
              </Button>
            </View>
            <Result
              each={each}
              persons={persons}
              price={price}
              allList={allList}
              />
          </View>
        </Content>
      </Container>
    );
  }
}
