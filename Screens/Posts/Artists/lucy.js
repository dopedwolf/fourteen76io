import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Lucy extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Lucy Crookes"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/lucyhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What is your preferred art style?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"During my undergraduate degree in the UK I was a big oil painter, I loved the look, the smell, the way I could mix it with different mediums to create different looks. But since I moved to Birmingham for my masters I no longer have a studio space which makes it hard to oil paint, so now I've really got into illustration with pen and watercolor. I like how this style can capture things with just a few lines or splashes of color."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/lucyart/coors.png"),
                require("../../../assets/images/artists/lucyart/exp.png"),
                require("../../../assets/images/artists/lucyart/hands.png"),
                require("../../../assets/images/artists/lucyart/jewels.png"),
                require("../../../assets/images/artists/lucyart/reflection.png"),
                require("../../../assets/images/artists/lucyart/rocksb.png"),
                require("../../../assets/images/artists/lucyart/trainblack.png"),
                require("../../../assets/images/artists/lucyart/treeblack.png"),
                require("../../../assets/images/artists/lucyart/woods.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What's the longest amount of time you've spent on one piece?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I spent 5 months working on a series of three really big oil paintings, I worked on them in a studio for about 6 hours on most weekdays during this period. I worked on all three at the same time to avoid getting tired of just one!"}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Favorite piece that you've done?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"One of favorites is a charcoal drawing I did when I hadn't really used charcoal before. I think the surprise of having it turn out exactly how I wanted it was a real buzz for me. The drawing is kind of ghostly and uneasy, and yet all you're looking at is a child playing in the woods."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"If you had to pick one famous artist to have a drink with, dead or alive, who would it be and why?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I think I'd go for a drink with Cindy Sherman. She's a bit of a mystery in the art world. Her series of self- portraits are so iconic and were so ahead of their time, however, although they depict the artist herself, they are depersonalized. She is always dressed up, or playing a role, and is not her real self. Her images are fun to look at, and exude so much meaning, but you can't really get an idea of what she's like as a person. Maybe after a few drinks she would open up."}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/facebook.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.facebook.com/lucycrookesart')}>
                      {' Lucy Crookes Art'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Lucy;
