var React = require('react');
import {View, Image, TouchableOpacity} from 'react-native';
import Cstyles from '../Screens/styles/common';
import {Actions} from 'react-native-router-flux';

class MainTabBar extends React.Component {
  render() {
    return (
      <View style={Cstyles.MainNavBar}>
        <TouchableOpacity onPress={() => Actions.home()}>
          <Image source={require('../assets/icons/home.png')} style={Cstyles.menuItem}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.menu()}>
          <Image source={require('../assets/icons/menu.png')} style={Cstyles.menuItem}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.calendar()}>
          <Image source={require('../assets/icons/calendar.png')} style={Cstyles.menuItem}/>
        </TouchableOpacity>
      </View>
    );
  }
};

module.exports = MainTabBar;
