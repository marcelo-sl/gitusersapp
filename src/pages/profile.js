import React from 'react';

import {WebView} from 'react-native-webview';

const Profile = ({navigation}) => (
  //   <Text>This is a simple text</Text>
  <WebView
    source={{uri: `https://github.com/${navigation.getParam('profile')}`}}
  />
);

Profile.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('profile'),
});

export default Profile;
