import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Sandlings extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Sandlings"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Alastair Bartlett</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/sandlings/one.jpg"),
                require("../../../assets/images/photography/sandlings/two.jpg"),
                require("../../../assets/images/photography/sandlings/three.jpg"),
                require("../../../assets/images/photography/sandlings/four.jpg"),
                require("../../../assets/images/photography/sandlings/five.jpg"),
                require("../../../assets/images/photography/sandlings/six.jpg"),
                require("../../../assets/images/photography/sandlings/seven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"This work intertwines my childhood memories and the innate need to document my surroundings. Going out and making this work allows me to reconnect with the feeling of adventure I had growing up in the Suffolk countryside. The images hint at a subtle balance between intrigue and fear. Each of the pictures aims to send the viewer on a journey through the past and future of the moment of capture."}
            </Text>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://www.alastairbartlett.com/')}>
                    {' alastairbartlett.com'}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/alastair_bartlett/')}>
                    {' Alastair Bartlett'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Sandlings;
