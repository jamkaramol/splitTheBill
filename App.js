import React, {Component} from 'react';
import AppContainer from "./App.routes.config";
import { Root } from "native-base";

export default class App extends Component {
  render() {
    return (
      <Root>
        <AppContainer/>
      </Root>
    );
  }
};
