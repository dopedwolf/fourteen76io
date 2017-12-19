import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Newyork extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"New York City Perspectives"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Victoria Vrublevska</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/victoria/one.jpg"),
                require("../../../assets/images/photography/victoria/two.jpg"),
                require("../../../assets/images/photography/victoria/three.jpg"),
                require("../../../assets/images/photography/victoria/four.jpg"),
                require("../../../assets/images/photography/victoria/five.jpg"),
                require("../../../assets/images/photography/victoria/six.jpg"),
                require("../../../assets/images/photography/victoria/seven.jpg"),
                require("../../../assets/images/photography/victoria/eight.jpg"),
                require("../../../assets/images/photography/victoria/nine.jpg"),
                require("../../../assets/images/photography/victoria/ten.jpg"),
                require("../../../assets/images/photography/victoria/eleven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"New York City Perspectives is an attempt to capture cinematic qualities of New York - breathtaking perspectives, grand architecture and constant movement of the city that never sleeps."}</Text>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/victoriavrublevska/')}>
                      {' Victoria Vrublevska'}
                  </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Newyork;
