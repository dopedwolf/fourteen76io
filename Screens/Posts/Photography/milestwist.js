import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Milestwist extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Miles Twist"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Photo Story</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/miles_twist/one.jpg"),
                require("../../../assets/images/photography/miles_twist/two.jpg"),
                require("../../../assets/images/photography/miles_twist/three.jpg"),
                require("../../../assets/images/photography/miles_twist/four.jpg"),
                require("../../../assets/images/photography/miles_twist/five.jpg"),
                require("../../../assets/images/photography/miles_twist/six.jpg"),
                require("../../../assets/images/photography/miles_twist/seven.jpg"),
                require("../../../assets/images/photography/miles_twist/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/milestwist/')}>
                    {' Miles Twist'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Milestwist;
