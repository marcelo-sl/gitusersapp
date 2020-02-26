import React, {Component} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
          <View style={styles.gitMark}>
            <Icon name="github" size={40} />
          </View>
          <View style={styles.titleText}>
            <Text style={styles.title}>Enter your github username</Text>
            <Text style={styles.subTitle}>Type only the username below...</Text>
          </View>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={username => this.setState({username})}
          value={this.state.username}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Profile', {
              profile: this.state.username,
            });
          }}>
          <Text style={styles.buttonText}>View</Text>
          <Icon name="chevron-right" size={15} style={styles.nextIcon} />
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
    width: '85%',
    height: '30%',
    marginBottom: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#ededed',
    flexDirection: 'row',
  },
  gitMark: {
    width: '15%',
    alignItems: 'center',
  },

  titleText: {
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
  },
  title: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: 10,
    color: '#888',
  },

  textInput: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    fontSize: 18,
    borderColor: '#AAA',
    borderWidth: 1,
  },

  button: {
    width: '85%',
    flexDirection: 'row',
    margin: 4,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
  },

  nextIcon: {
    marginLeft: 10,
    color: '#fff',
  },
});
