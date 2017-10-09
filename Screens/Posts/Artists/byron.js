import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Byron extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Byron Sonnier"}</Text>
              <Text style={Cstyles.photoSeriesSubTitleAuthor}>Interview by Jonathan Patrick</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/byron_1.jpg')} style={Cstyles.articleHeadImagePortrait}/>
              <Text style={Cstyles.photoby}>Joy Like A River</Text>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Religion is immediately apparent in your work. While some of your work seems to have ties to the American South, the religious elements are not solely Christian. Kanthaka Escapes a Broken Heart blends Christian and Buddhist symbolism. How did you come to this mix of Eastern and Western themes?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  I come from a Cajun and mostly Catholic family in South Louisiana so I grew up going to church on a regular basis. There are lots of icons and symbols used in Catholicism and I’ve always been fascinated by them. Once I got older and left that environment, I started to notice the symbols and themes used in other religions and some of their commonalities. I became especially interested in the Revival and Holiness movements of the South. That led to my discovery of snake handling and the many controversies and characters involved in that practice. I started to make work based on revival tents, preachers, and snake handlers. While on a trip home to Louisiana one Fourth of July I noticed how all the fireworks tents looked just like revival tents. I took a bunch of photos and started painting the Black Cat logo which has its origins in China as a symbol of good luck and fortune. This led me to use other forms of cats including panthers and tigers in my work. I eventually began combining these symbols and ideas from different religions, cultures, and personal experiences to create my own narrative.
                </Text>
              </View>
            </View>
            <Image source={require('../../../assets/images/artists/byron_2.jpg')} style={Cstyles.articleHeadImageDescription}/>
            <Text style={Cstyles.photoby}>Kanthaka Escapes A Broken Heart</Text>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Zeitgeist symbolism, what look to be salvaged materials for canvas, and minimalist color schemes lend a relic'd effect to these pieces. It's almost as if they were dug out of an old attic trunk or pulled from an archaic text. Some would consider it folk art with pieces such as Joy Like A River, but that line is crossed when you start contemplating folk themes thousands of years older than us, i.e. Kanthaka... What is it that draws you to history and antiquity?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I started collecting old photographs and cabinet cards after finding a bunch in a pile of trash outside of a recently deceased neighbor’s house. Her family had thrown them out and for some reason I felt the need to hold on to them. I would occasionally pick up others at antique malls and flea markets. It was strange not knowing who these people were or having any kind of context for the photograph. I realized that this made them the perfect “blank” canvas for some of my ideas. I could turn them into preachers, snake handlers, firework peddlers, or cats. After framing them I was always left with a pile of this cool looking cardboard that the photos were mounted to and I eventually starting painting on these as well. I’ve always felt as if I’m creating my own version of history and mythology in my work and painting on old things is an extension of that."}
                </Text>
              </View>
            </View>
              <Image source={require('../../../assets/images/artists/byron_3.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.photoby}>Man's Rule Contested</Text>
              <View style={Cstyles.articleBody}>
                  <View style={Cstyles.articleContent}>
                      <Text style={Cstyles.articleBodyQuestion}>
                        {"The minimal, but richly filled out, line work here brings to mind American Traditional tattooing. In fact, the finer line work embedded in your canvases' backgrounds seem much like skin or fingerprints. Would you consider tattoos as an influence on your work? If not, where or how did you stumble upon that particular aesthetic?"}
                      </Text>
                      <Text style={Cstyles.articleBodyContent}>
                        {"I can definitely see the similarities between my paintings and tattoos but I can’t say its been a direct influence. I have spent the last year or so trying to simplify my work by using fewer colors and lines. I’m constantly challenging myself to put forward a concept with as few touches as possible and by using a background with a bit of texture and imperfection, it becomes part of the piece."}
                      </Text>
                  </View>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/byronsonnier/')}>
                      {' Byron Sonnier'}
                    </Text>
                </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Byron;
