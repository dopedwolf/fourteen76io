import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Gaijin extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Gaijin X"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/gaijin/one.jpg"),
                require("../../../assets/images/artists/gaijin/two.jpg"),
                require("../../../assets/images/artists/gaijin/three.jpg"),
                require("../../../assets/images/artists/gaijin/four.jpg"),
                require("../../../assets/images/artists/gaijin/five.jpg"),
                require("../../../assets/images/artists/gaijin/six.jpg"),
                require("../../../assets/images/artists/gaijin/seven.jpg"),
                require("../../../assets/images/artists/gaijin/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://www.gaijincollective.com/')}>
                  {' gaijincollective.com'}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/gaijinisntphysical/')}>
                    {' Gaijin X'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Gaijin;
