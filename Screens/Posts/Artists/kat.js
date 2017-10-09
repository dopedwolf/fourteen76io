import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Kat extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Kat Tracy"}</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/kat_tracy/one.jpg"),
                require("../../../assets/images/artists/kat_tracy/two.jpg"),
                require("../../../assets/images/artists/kat_tracy/three.jpg"),
                require("../../../assets/images/artists/kat_tracy/four.jpg"),
                require("../../../assets/images/artists/kat_tracy/five.jpg"),
                require("../../../assets/images/artists/kat_tracy/six.jpg"),
                require("../../../assets/images/artists/kat_tracy/seven.jpg"),
                require("../../../assets/images/artists/kat_tracy/eight.jpg"),
                require("../../../assets/images/artists/kat_tracy/nine.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/kitticles/')}>
                    {' Kat Tracy'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Kat;
