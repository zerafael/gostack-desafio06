import React, { Component } from 'react';
import WebView from 'react-native-webview';

class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  render() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');
    return (
      <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
    );
  }
}

export default Repository;
