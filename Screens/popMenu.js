var React = require('react');
import {View, Image, TouchableOpacity, Text, Linking} from 'react-native';
import Cstyles from '../Screens/styles/common';
import {Actions} from 'react-native-router-flux';

//<Text style={Cstyles.betaMessage}>Fourteen76 Beta: Most of the tabs are not accesible at this moment. Stay tuned for updates on functionality and content in the following week. If you have any suggestions or feedback feel free to message us through social media or email</Text>

class PopMenu extends React.Component {
  render() {
    return (
      <View style={Cstyles.popContainer}>
        <View style={Cstyles.upMenu}>
          <View style={Cstyles.popMenuSideOne}>
            <TouchableOpacity onPress={() => Actions.home()}>
              <Text style={Cstyles.popMenuItems}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.photo()}>
              <Text style={Cstyles.popMenuItems}>Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.food()}>
              <Text style={Cstyles.popMenuItems}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.calendar()}>
              <Text style={Cstyles.popMenuItems}>Calendar</Text>
            </TouchableOpacity>
          </View>
          <View style={Cstyles.popMenuSideTwo}>
            <TouchableOpacity onPress={() => Actions.artists()}>
              <Text style={Cstyles.popMenuItems}>Artists</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.music()}>
              <Text style={Cstyles.popMenuItems}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.elsepage()}>
              <Text style={Cstyles.popMenuItems}>!Else¡</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.contact()}>
              <Text style={Cstyles.popMenuItems}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Cstyles.popMenuSideThree}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/fourteen76/')}>
            <Image source={require('../assets/icons/insta.png')} style={Cstyles.menuItemPop}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/fourteen76/')}>
            <Image source={require('../assets/icons/facebook.png')} style={Cstyles.menuItemPop}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

module.exports = PopMenu;
