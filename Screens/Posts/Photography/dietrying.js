import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Dietrying extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"DIE TRYING"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Sniper Streets</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/zero/one.jpg"),
                require("../../../assets/images/photography/zero/two.jpg"),
                require("../../../assets/images/photography/zero/three.jpg"),
                require("../../../assets/images/photography/zero/four.jpg"),
                require("../../../assets/images/photography/zero/five.jpg"),
                require("../../../assets/images/photography/zero/six.jpg"),
                require("../../../assets/images/photography/zero/seven.jpg"),
                require("../../../assets/images/photography/zero/eight.jpg"),
                require("../../../assets/images/photography/zero/nine.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"Zero Skate Team's United States of Whatever summer tour stop, in Birmingham, AL on July 25, 2017."}
            </Text>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/sniperstreets/')}>
                    {' sniperstreets'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Dietrying;
