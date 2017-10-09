import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';

class Food extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.pageContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.heirloom()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/else/eugenes.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Heirloom"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Food"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.pho()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/else/pho.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"Pho Que Huong"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Food"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => Actions.carrigans()} style={Cstyles.postTouchable}>
              <View style={Cstyles.postContainer}>
                <Image source={require('../assets/images/else/carrigans.jpg')} style={Cstyles.postImage}/>
                <View style={Cstyles.subPostContainer}>
                  <Text style={Cstyles.postTitle}>{"A Street Soul, Fine and Fried"}</Text>
                  <View style={Cstyles.postSub}>
                    <Text style={Cstyles.postSubCat}>{"Food"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Food;
