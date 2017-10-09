import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Merrilee extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitleAbove}>
              <Text style={Cstyles.photoSeriesTitle}>{"Merrilee Challiss"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Interview by Jonathan Patrick</Text>
              <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
            </View>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/photography/merrilee/head.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <View style={Cstyles.quote}>
                  <Text style={Cstyles.articleBodyItilizedAbove}>{"'...le mieux est l'ennemi du bien.'"}</Text>
                  <Text style={Cstyles.articleBodyItilizedAbove}>{"'(...perfect is the enemy of good.)'"}</Text>
                  <Text style={Cstyles.articleBodyItilizedAbove}>{"-Voltaire"}</Text>
                </View>
                <Text style={Cstyles.articleBodyContent}>
                  {"Merrilee Challiss recently invited us into the waking dream that is her studio full of nooks cozy with the words and images of Haekel and Harper, succulent shrines, a work space more like an altar to ancient spirits captured on canvas, and a thousand sequined eyes whose pupils watch you watch yourself. She spoke with us about the necessity of acknowledging our environment in a way only our ancient ancestors knew how, how her work is a cry for community and empathy, and what I can only describe as (wo)mankind's need to return to some great mother. Below is a brief first part of what we spoke about."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Lots and lots of spiritual and totemic vibes are apparent here in your work."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Yea, I'm definitely influenced by African art, Paleolithic art, indigenous art, and Also by people like Ernst Haeckel. Do you know who he is?"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"No."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"He was a scientist and illustrator, a contemporary of Darwin. I'm influenced by him and also by Charlie Harper, an artist and illustrator. Their work excites the realms of wonder and imagination through this propagation of intelligence that we see in evidence in all forms in nature. That idea - that everything is connected - that it is ALL one thing- is a big part of my work, so I am connecting and engaging with the natural world and the spirit world through my art. I guess that's how I'm trying to insinuate my role as an artist in society."}
                </Text>
              </View>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/merrilee/one.jpg"),
                require("../../../assets/images/photography/merrilee/two.jpg"),
                require("../../../assets/images/photography/merrilee/three.jpg"),
                require("../../../assets/images/photography/merrilee/four.jpg"),
                require("../../../assets/images/photography/merrilee/five.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
              <View style={Cstyles.articleBody}>
                <View style={Cstyles.articleContent}>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Lots and lots of spiritual and totemic vibes are apparent here in your work."}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Well, they were definitely in more of a natural rhythm with all of the systems on earth. There's an archaic revival happening now, there's a mass extinction happening now, and we are also in a technical and informational revolution- so what we're living through is such an insanely chaotic time. I think this return to something that is more primal and more archaic (more rooted in interdependence) is really our only hope forward, because we have to remember that we're all connected. All these ideas have been converging for me as a maker and an artist, which sounds kind of wacky, but the act of putting one sequin on, then another sequin on, and having a breath or a thought in between that, you know, the whole work as a process becomes a meditation, a way to slow time down. It's kind of like my strategy for surviving these challenging times (laughs)."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Yea. In the sequined work, and maybe even in your dense line work, the meditative aspects are pretty hypnotic. I get kind of lost in its repetition."}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Yea, I always try to find patterns in nature. The work is just patterns, really. And if you think about some of the most compelling contemporary theories of physics, they say that the whole universe is made of vibrations, or that the universe is conscious. I see these sequins as these dots of light, these individual points of data, pointing to whatever the great mystery is."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"*Looking to a work in progress on one of Challiss' tables* This is Eostre? Or Ishtar?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Actually I was thinking of Artemis [of Ephesus]. I turned twenty-one while traveling in Turkey and spent my birthday walking among the ruins and viewing the statues in the museum in Ephesus. That experience affected me profoundly. She’s been popping up in my work for decades."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What brought you to depict her and these other women?"}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"They represent goddess energy or Gaian energy. I feel like we all collectively need to inject our world, via whatever our individual sphere of influence is, with as much Gaian consciousness as possible. Cynicism, which we are swimming in, is just no longer an appropriate response to the many challenges we are facing. We are living through some crazy times there’s a lot of really heavy shit – and yet there is so much beauty. How do you not make art about this stuff?"}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"What you mentioned about the need to depart from cynicism is interesting. It seems that with the internet age and the rate of the exchange of information these days that all of a sudden everyone's a smart ass. Cynicism and sarcasm seem to have lost their edge and meaning in a lot of ways."}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I just don't think it’s particularly useful for solving problems."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {"Yea. It seems cynicism has done a lot of legwork as far as bringing us to certain realizations goes, but maybe in those areas where the battlefield has leveled out it's time to come together and start building upon those realizations."}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"I feel like we have to give up the notion of 'battlefield', we have to give up the notion of dichotomy and otherness and separateness and nationhood. We are all one family, we are all one people. The separateness is an illusion."}
                  </Text>
                  <Text style={Cstyles.articleBodyQuestion}>
                    {'Definitely. **Looking at "Do the Wetiko!"** Those indigenous vibes we talked about earlier are heavy in this piece. Would you elaborate?'}
                  </Text>
                  <Text style={Cstyles.articleBodyContent}>
                    {"Well, there's a lot of darkness in my work. Maybe you can see that, that I'm trying to balance the light and the dark in a way. This piece here is about the idea of Wetiko, a word I had never heard of before until last fall, and after the election it popped up and kept popping up again and again in my own little liberal-bubble echo-chamber of a feed, so I thought to investigate it a little further. It's a Native American term describing the psycho-spiritual disease of the West; that people who haven't faced their own shadow, or darkness, are the ones who are fucking shit up the worst right now, you know? (laughs). It's spreading like a virus, and cutting us off from interconnection. So we have to dissolve this otherness, the main message of the divine feminine. Otherwise we're all going to end up in World War III."}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/merilka/')}>
                      {' Merrilee Challiss'}
                    </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Merrilee;
