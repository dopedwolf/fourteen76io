import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Twilightchildren extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Twilight Children"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Chris Berntsen</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/christian/one.jpg"),
                require("../../../assets/images/photography/christian/two.jpg"),
                require("../../../assets/images/photography/christian/three.jpg"),
                require("../../../assets/images/photography/christian/four.jpg"),
                require("../../../assets/images/photography/christian/five.jpg"),
                require("../../../assets/images/photography/christian/six.jpg"),
                require("../../../assets/images/photography/christian/seven.jpg"),
                require("../../../assets/images/photography/christian/eight.jpg"),
                require("../../../assets/images/photography/christian/nine.jpg"),
                require("../../../assets/images/photography/christian/ten.jpg"),
                require("../../../assets/images/photography/christian/eleven.jpg"),
                require("../../../assets/images/photography/christian/twelve.jpg"),
                require("../../../assets/images/photography/christian/thirteen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://chrisberntsen.com/')}>
                      {' chrisberntsen.com'}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/chris.berntsen/')}>
                      {' Chris Berntsen'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Twilightchildren;
