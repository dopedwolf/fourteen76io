import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Reed extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Reed Randolph"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/reed/one.jpg"),
                require("../../../assets/images/artists/reed/two.jpg"),
                require("../../../assets/images/artists/reed/three.jpg"),
                require("../../../assets/images/artists/reed/four.jpg"),
                require("../../../assets/images/artists/reed/five.jpg"),
                require("../../../assets/images/artists/reed/six.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/reedrandolph/?hl=en')}>
                    {' Reed Randolph'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Reed;
