import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Themalverns extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"The Malverns"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Ted Homer</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/malverns/one.jpg"),
                require("../../../assets/images/photography/malverns/two.jpg"),
                require("../../../assets/images/photography/malverns/three.jpg"),
                require("../../../assets/images/photography/malverns/four.jpg"),
                require("../../../assets/images/photography/malverns/five.jpg"),
                require("../../../assets/images/photography/malverns/six.jpg"),
                require("../../../assets/images/photography/malverns/seven.jpg"),
                require("../../../assets/images/photography/malverns/eight.jpg"),
                require("../../../assets/images/photography/malverns/nine.jpg"),
                require("../../../assets/images/photography/malverns/ten.jpg"),
                require("../../../assets/images/photography/malverns/eleven.jpg"),
                require("../../../assets/images/photography/malverns/twelve.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://www.tedhomer.co.uk/')}>
                      {' tedhomer.co.uk'}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://www.tedhomer.co.uk/')}>
                      {' Ted Homer'}
                  </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Themalverns;
