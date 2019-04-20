import React from 'react';
import { Form, Item, Picker, Icon, View, Text } from "native-base";

const PERSONS_ARRAY = ["2", "3", "4", "5", "6", "7", "8", "10"];

export default class PersonPicker extends React.Component {
  render() {
    const { selectHandler, persons } = this.props;
    return (
      <View style={{flex:1, flexDirection: "row"}}>
        <Text style={{flex:1, alignContent:"center"}}>
          Select Persons
        </Text>
        <Form style={{flex:1}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select number of persons"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={persons}
                onValueChange={selectHandler}
              >
                {PERSONS_ARRAY.map((val, index) => {
                  return <Picker.Item label={val} value={val} key={index +"_" + val} />
                })}
              </Picker>
            </Item>
          </Form>
      </View>
      );
    }
}
