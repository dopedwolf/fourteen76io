import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Byronsonnier extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Byron Sonnier"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Photo Story</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/byron/one.jpg"),
                require("../../../assets/images/photography/byron/two.jpg"),
                require("../../../assets/images/photography/byron/three.jpg"),
                require("../../../assets/images/photography/byron/four.jpg"),
                require("../../../assets/images/photography/byron/five.jpg"),
                require("../../../assets/images/photography/byron/six.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            </View>
            <View style={Cstyles.shareSocial}>
              <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/byronsonnier/')}>
                  {' Byron Sonnier'}
                </Text>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Byronsonnier;
