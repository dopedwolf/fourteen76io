import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Alyssa extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Alyssa Hope"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/alyssahead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"What is your preferred style?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"My work is highly illustrative. It thrives off of narrative. I prefer to work with a story in mind whether it be linear or a thought plucked out of time. So all of my work is pretty fanciful and imaginative. I work in unnatural but subdued color palettes to keep some whimsy throughout my pieces."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Hardcore or HXC?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"That is a tricky question, but to answer it short and to the point, Hardcore is a genre, HXC is a lifestyle."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/alyssaart/bird.png"),
                require("../../../assets/images/artists/alyssaart/five.png"),
                require("../../../assets/images/artists/alyssaart/four.png"),
                require("../../../assets/images/artists/alyssaart/framed.png"),
                require("../../../assets/images/artists/alyssaart/horns.png"),
                require("../../../assets/images/artists/alyssaart/mossy.png"),
                require("../../../assets/images/artists/alyssaart/wolf.png"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What influences you when working on a piece?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Music probably has the most influence while I am working. I listen to a lot of ambient electronic music and soundtracks. My favorite artist to listen to when I work is Disasterpeace because he has worked on a lot of video games and understands the importance of narrative. Something else that definitely influences my work, oddly enough, is editorial fashion. I use a lot of female figures and it is important to my image that the figures look unnaturally natural, and a lot of high fashion deals with modeling the same way."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Who is your favorite artist?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"It will come as no surprise to anyone who knows her work that J.A.W. Cooper is my favorite artist and definitely my biggest influence. We have a very similar message and language, although she is far more developed than I am. Some other artists that I have always looked up to are Caitlin Hackett and Allison Sommers."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Favorite cartoon?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"It changes a lot, but if you consider Anime to be a cartoon, Claymore is definitely my favorite. I love the animation and the story is phenomenal. It has the best music out of any anime I have seen, in my opinion of course. I have seen it so many times!"}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"How long have you been drawing?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>{"I have been drawing since before I could write. I would say since i was about 3 probably. It was something that my parents knew would keep me occupied for hours even though sometimes it migrated from the paper to the carpet. I have been painting since I was about 12. I started with oil and found very quickly that I hated it and eventually found watercolor. After a few years of watercolor I fell in love with my soul mate, Gouache."}</Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://alfa-create.com/')}>
                      {' alfa-create.com'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Alyssa;
