import React, {Component} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Git Users',
  };

  state = {
    username: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Enter your github username</Text>
          <Text style={styles.subTitle}>Type only the username below...</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={username => this.setState({username})}
          value={this.state.username}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Profile', {
              profile: this.state.username,
            });
          }}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },

  titleContainer: {
    width: '80%',
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#DADADA',
  },

  title: {
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 15,
  },

  textInput: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    fontSize: 18,
    borderColor: '#AAA',
    borderWidth: 1,
  },

  button: {
    width: '80%',
    margin: 4,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
});
