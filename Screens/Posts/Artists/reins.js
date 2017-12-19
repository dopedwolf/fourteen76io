import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Reins extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Reins Tarpley"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/reinsart/bunny.png"),
                require("../../../assets/images/artists/reinsart/elephant.png"),
                require("../../../assets/images/artists/reinsart/hand.png"),
                require("../../../assets/images/artists/reinsart/otherface.png"),
                require("../../../assets/images/artists/reinsart/mask.png"),
                require("../../../assets/images/artists/reinsart/redface.png"),
                require("../../../assets/images/artists/reinsart/tiger.png"),
                require("../../../assets/images/artists/reinsart/yellow.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/corsicanafire/')}>
                    {' Reins Tarpley'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Reins;
