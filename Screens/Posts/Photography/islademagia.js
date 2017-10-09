import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Islademagia extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Isla De Magia"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Camila Escobar</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/islademagia/one.jpg"),
                require("../../../assets/images/photography/islademagia/two.jpg"),
                require("../../../assets/images/photography/islademagia/three.jpg"),
                require("../../../assets/images/photography/islademagia/four.jpg"),
                require("../../../assets/images/photography/islademagia/five.jpg"),
                require("../../../assets/images/photography/islademagia/six.jpg"),
                require("../../../assets/images/photography/islademagia/seven.jpg"),
                require("../../../assets/images/photography/islademagia/eight.jpg"),
                require("../../../assets/images/photography/islademagia/nine.jpg"),
                require("../../../assets/images/photography/islademagia/ten.jpg"),
                require("../../../assets/images/photography/islademagia/eleven.jpg"),
                require("../../../assets/images/photography/islademagia/twelve.jpg"),
                require("../../../assets/images/photography/islademagia/thirteen.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>
              {"'I've been to Providencia twice, each time has been different, but what has remained is the magic that lives within. Here is a small selection of photographs that I took around this timeless and enchanting place.'"}
            </Text>
            <View style={Cstyles.noDescriptionShare}>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://camilaescobarphotography.com/')}>
                    {' camilaescobarphotography.com'}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/cescobarll/')}>
                    {' Camila Escobar'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Islademagia;
