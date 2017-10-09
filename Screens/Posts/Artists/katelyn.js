import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Katelyn extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Katelyn Ledford"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/katelynhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"When these pieces were first forwarded to me, I thought I was looking at photographs. Needless to say, these pieces are stunning. How long have you been painting?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I first started painting with acrylics when I was 15 and tried my hand at photorealism with paints. It took me awhile to get more comfortable with oil paints in high school since they dry so slowly, but I was definitely hooked once I got the hang of it. However, I’m only where I am now with my level of painting because I taught myself how to draw photo-realistically at a young age. I would print out pictures of my favorite band members and draw them in graphite to mimic the images. My mom says she saw one of my drawings in my room and cried because she knew I had a talent for capturing people’s faces. They’re not very good looking at them now, but constantly practicing when I was young gave me an early start into my art career."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/katelynart/one.jpg"),
                require("../../../assets/images/artists/katelynart/two.jpg"),
                require("../../../assets/images/artists/katelynart/three.jpg"),
                require("../../../assets/images/artists/katelynart/four.jpg"),
                require("../../../assets/images/artists/katelynart/five.jpg"),
                require("../../../assets/images/artists/katelynart/six.jpg"),
                require("../../../assets/images/artists/katelynart/seven.jpg"),
                require("../../../assets/images/artists/katelynart/eight.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Hyperrealism is evident in your work. Is that the movement you identify with most?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"As of right now, yes I do. I’ve received backlash before for doing so because some see it as simply a copy of a photograph with no meaning behind it, but that’s Photorealism, not Hyperrealism. The whole point of Hyperrealism is to create these living, tangible subjects with felt emotions and a story, not just recreate a pretty picture. I’m beginning to add in more elements to my paintings to help tell a narrative, like leaving areas unfinished and drafted, but I still maintain a Hyperrealistic style in the most important parts of my paintings."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Is most of your work this photo-real?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I’ve tried to stray from photo-real works in the past, but I always come back to it, so most of my work is photorealistic even from a young age. Trying out other styles usually felt foreign even though they did push me out of my comfort zone. I learned to be less uptight about painting from experimenting with expressive lines and abstracted forms, so I’m glad to have tried out other styles."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What is your favorite medium to work with?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Oil paints are my one true love, but honestly I can get addicted to any other medium, like embroidery, metal casting, or woodworking. I never thought I would be one to get into 3-D works, but after taking sculpture classes at UAB, I really enjoyed getting to understand my pieces from every angle, especially metal casting. Working with aluminum and iron is very process based and you don’t get to see your final product until the very end, which is completely different from oil painting, so it was refreshing to become familiar with it as I continued painting. Graphite is a close second for me as a favorite since it was my first medium to ever work with and I still love to do little graphite drawings when I have the free time. It’s easy to sit on my couch and draw up something that inspires me then immediately put it into one of the many antique frames I collect."}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://kledfordart.com/')}>
                      {' kledfordart.com'}
                    </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/kedford/')}>
                      {' Katelyn Ledford'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Katelyn;
