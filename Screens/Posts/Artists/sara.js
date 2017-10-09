import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Sara extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Sara Roberson"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/sarahead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What's your preferred art style?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I never know quite how to answer when people ask me what kind of art I do. I've mostly resigned to using the term 'lowbrow', because the movement began through subcultures/ DIY scenes- like comic and punk art. To be more literal, I use a lot of ink, and do a lot of line work, with minimal touches of color at my best."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/saraart/blacksara.png"),
                require("../../../assets/images/artists/saraart/redsara.png"),
                require("../../../assets/images/artists/saraart/snakes.png"),
                require("../../../assets/images/artists/saraart/tongue.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What influences you when working on a piece?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Lots of things/ feelings. The natural cycle to and fro of inner turmoil and moments of peace (focusing on existing). Genuine people who aren't afraid to leave pretension behind them to connect with others. Pain. NATURE- light patterns, moss. Dawn and dusk. Contemplative music. Dancing. People that I love regardless of ego or that aforementioned pretentious inclination we all have."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What's your favorite hobby?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Traveling in general or long ass drives listening to new albums- but I sometimes feel guilty for the amount of fuel I use. Dancing is coming up to a close second recently. Haha."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Your ideal job?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{"I don't really know- probably something involving Native American land conservation. I'm just currently too self involved to throw my life into that"}</Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                      {"How long has art been part of your life?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{"I've always doodled and colored, but I've been drawing seriously for only about 3 years. My adolescent creative energy was mostly given to symphonic music & poetry."}</Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/ixa______/')}>
                      {' Sara Roberson'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Sara;
