import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from '../../Slider/slider';
class Christina extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Christina Daniels (Dagger Fingers)"}</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/artists/christinahead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"So what inspired Dagger Fingers?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I think Dagger Fingers as an illustration project spurred from a time in my life when I was experiencing a variety of frustrations that a lot of young people, especially creative makers go through, career wise, day job wise - whether that's trying to find the time to do what you love after you've done what pays the bills or struggling with taking the steps towards figuring out what it is you're most passionate about. I was constantly falling in and out of love with the juxtaposition between what makes something 'fine art' versus something considered low brow, and I'd say that combined with crippling anxiety in social situations but not having figured out a way to communicate that - all of that became this entity that I just started talking from. I was already doing graphic design and had focused on fiber arts and drawing in undergrad, but realized that the best way to deal with what I was going through was to laugh at it through pen and ink."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"At first I was scribbling little pen drawings on Post It notes and scrap printer paper between projects at my first office job, but eventually it became so that I would hear a line during the day or have a conversation that would ignite this tongue in cheek response or phrase that I eventually paired with an illustration. Sometimes I'd illustrate the line, or jot it down in my sketchbook. I usually have a few at a time that I play around with until they feel right, and become a print."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/artists/christinaart/one.jpg"),
                require("../../../assets/images/artists/christinaart/two.jpg"),
                require("../../../assets/images/artists/christinaart/three.jpg"),
                require("../../../assets/images/artists/christinaart/four.jpg"),
                require("../../../assets/images/artists/christinaart/five.jpg"),
                require("../../../assets/images/artists/christinaart/six.jpg"),
                require("../../../assets/images/artists/christinaart/seven.jpg"),
                require("../../../assets/images/artists/christinaart/eight.jpg"),
                require("../../../assets/images/artists/christinaart/nine.jpg"),
                require("../../../assets/images/artists/christinaart/ten.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"I see a lot of naturalism in your work. Does that come from a special interest in anything?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I grew up with a lot of house plants and vibrant gardens - being raised around the outdoors and a love for gardening definitely rubbed off. Even now my place is pretty packed with plants. I'd like to do more work like the screen printed poster I did for Ruffner Mountain's first art show, Eco Stories. That show just ended this month, but I enjoyed the excuse to study some of Alabama's native plants. I really like what Jon Woolley at Ruffner is doing by bringing local visual artists together to illustrate ecological elements and information from their Nature Center."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Where do you hope to take Dagger Fingers?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I'd like to focus more on making series and print editions, I think. DF started in November 2014 so going from sculpture and large scale drawing to this black line aesthetic still feels pretty new for me. For a while I was churning out tons of drawings but wasn't really sure how to curate what I posted or did with it, and now I've taken a step back and am more project by project and art show focused. I've submitted a few pieces to a couple of group zines that are coming out soon. I would like to get an online shop situation going, but I'm still trying to figure out my audience and overall goals. I definitely want to collaborate with other artists & illustrators more - the few times I've gotten to do that so far have been awesome."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"How many times have you watched the 'God Warrior' clip?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Haha, only a few times actually. My tshirt you're referring to came from the largest drawing I've done to date - which was mailed to the Fine Southern Gentlemen screen printing warehouse in Austin, Texas as a trade and they actually ended up printing them up as shirts too. They really loved the phrase 'dark sided' and let me add my own spin to it."}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/daggerfingers/')}>
                      {' Dagger Fingers'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Christina;
