import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Lostlands extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Lost Lands"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Bryan Atkinson</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/lostlands/one.jpg"),
                require("../../../assets/images/photography/lostlands/two.jpg"),
                require("../../../assets/images/photography/lostlands/three.jpg"),
                require("../../../assets/images/photography/lostlands/four.jpg"),
                require("../../../assets/images/photography/lostlands/five.jpg"),
                require("../../../assets/images/photography/lostlands/six.jpg"),
                require("../../../assets/images/photography/lostlands/seven.jpg"),
                require("../../../assets/images/photography/lostlands/eight.jpg"),
                require("../../../assets/images/photography/lostlands/nine.jpg"),
                require("../../../assets/images/photography/lostlands/ten.jpg"),
                require("../../../assets/images/photography/lostlands/eleven.jpg"),
                require("../../../assets/images/photography/lostlands/twelve.jpg"),
                require("../../../assets/images/photography/lostlands/thirteen.jpg"),
                require("../../../assets/images/photography/lostlands/fourteen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"Bryan Atkinson (b. 1979) is a native of Kansas City and still resides there today. His work is centered on street and documentary photography. He first became interested in the medium after taking a film photography class in high school. Since then he has sought to document the environment around him. His work today focuses on the relationship between people and spaces, with a strong concentration on the urban landscapes of his native Kansas City, and the rural Midwest."}
            </Text>
            <Text style={Cstyles.photoSeriesDescription}>{"The pieces in this series are from an ongoing photo project titled 'Lost Lands'. This project aims to present a vibrant and honest portrait of Kansas City's forgotten neighborhoods and landscapes. While downtown Kansas City has undergone a radical transformation over the last two decades, a large remainder of the urban core has largely been ignored. The project seeks to document these spaces before they are lost to time some ill planned urban renewal effort."}</Text>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://bryanatkinson.co/')}>
                      {' bryanatkinson.co'}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/bryan.816/')}>
                      {' Bryan Atkinson'}
                  </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Lostlands;
