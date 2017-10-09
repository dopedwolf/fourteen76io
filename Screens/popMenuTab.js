var React = require('react');
import {View, Image, TouchableOpacity} from 'react-native';
import Cstyles from '../Screens/styles/common';
import {Actions} from 'react-native-router-flux';

class popMenuTab extends React.Component {
  render() {
    return (
      <View style={Cstyles.popMenu}>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Image source={require('../assets/icons/exit2.png')} style={Cstyles.menuItem}/>
        </TouchableOpacity>
    </View>
    );
  }
};

module.exports = popMenuTab;
