import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Profile from './pages/profile';

export default createStackNavigator(
  {
    Main,
    Profile,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#FFF',
    },
  },
);
