import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Wisconsinwinters extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Wisconsin Winters"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Callie Mills</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/callie/one.jpg"),
                require("../../../assets/images/photography/callie/two.jpg"),
                require("../../../assets/images/photography/callie/three.jpg"),
                require("../../../assets/images/photography/callie/four.jpg"),
                require("../../../assets/images/photography/callie/five.jpg"),
                require("../../../assets/images/photography/callie/six.jpg"),
                require("../../../assets/images/photography/callie/seven.jpg"),
                require("../../../assets/images/photography/callie/eight.jpg"),
                require("../../../assets/images/photography/callie/nine.jpg"),
                require("../../../assets/images/photography/callie/ten.jpg"),
                require("../../../assets/images/photography/callie/eleven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/thecalliefox/')}>
                    {' Callie Mills'}
                  </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Wisconsinwinters;
