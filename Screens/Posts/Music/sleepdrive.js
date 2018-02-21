import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class SleepDrive extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/music/sleepdrivehead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitleItalized}>{"Sleep Drive"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>Album by Ant'lrd</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Birmingham native, Ant'lrd's, newest LP pivots on the hinges of a modern nostalgia, swaying back and forth between memories not yet experienced and flashes of past lives with lilting precision. The three track release is a long draw from a deep well, while never overstaying its welcome. Here Ant'lrd sheds a little insight on his most recent mantra, "}<Text style={Cstyles.articleBodyItilized}>Sleep Drive</Text>.
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Meditation comes almost immediately to mind when I put this record on. In fact, Sleep Drive sounds a lot like an exercise in meditation. Do you practice any type of meditation?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I participated in a Vipassana meditation retreat a couple of years back. It was 10 days of sitting in silence, meditating for 10 hours a day; an exercise in solitude. It was a really wonderful and transformative experience. When I have the time I like to practice Vipassana in the morning for about 30 minutes to get my day started. I mostly participate in either walking meditation or meditating while riding my bike. Those are both very calming and peaceful activities for me, and I like the idea of removing meditation from a quiet room//eyes closed setting, and being out in the world."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/sleepdrivealbum.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleBody}>
                <Text style={Cstyles.articleBodyQuestion}>
                  The term soundscape is thrown around a lot, but <Text style={Cstyles.articleBodyQuestionItilized}>Sleep Drive's</Text> sounds seem to take shape in a way very reminiscent of the natural world, i.e., electronic chirping, radio static waves, fuzzy analog chants. How much inspiration does your music draw from the landscapes around you?
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"My music is definitely a product of its environment. I take a lot of field recordings from around my neighborhood or wherever I visit really. I spent a lot of time taking trips out to the coast last summer while writing"} <Text style={Cstyles.articleBodyItilized}>Sleep Drive</Text>{", and just staring at the ocean for an indeterminate amount of time, just totally zoning on it. The track, MS-Dass, is totally a reflection of that, and trying to capture that bliss that I feel when I do go to the ocean. I love the pacific northwest, and feel very lucky to live here. There's so much large beauty, but it also gets very hazy, foggy, rainy, cloudy, etc. and those are nice ingredients or seeds of influence for making the music that I do."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  With thriving outlets for inventors like Control Voltage around, Portland is becoming a satellite Mecca for Euroracks and boutique modular synthesizers. A Eurorack is currently a large part of your setup. Was that the case when you were living in Chicago? What place do modular synths have in <Text style={Cstyles.articleBodyQuestionItalized}>Sleep Drive</Text>?
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Yeah. it's an incredibly vibrant scene for that kind of thing, but it's actually something that I've been getting into now for only about the past 8 months. There is zero modular work on previous records, as well as "} <Text style={Cstyles.articleBodyItilized}>{"Sleep Drive. Sleep Drive"}</Text>{" mainly centered around my use of my op-1 (which is a super tiny sampler, drum machine, 4 track recorder, and synth), a roland 404 sampler, various bits of percussion equipment, tape recordings, and a few pedals. I've been writing a new record now for about a year, and the modular plays a major role in that one. I feel more excited than ever about experimenting with new sounds/gear. The possibilities seem endless, and I have a lot of fun exploring, making patches and having these accidental moments where something great just appears from nowhere."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                    {"What is your favorite texture?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"It would be pretty challenging for me to come up with a favorite texture, but here're a few that I really enjoy: the scraping/cracking sound of squirrels eating nuts, when water washes ashore at the ocean and you hear it fizzing, the grain of 60's-70's National Geographic photos, fucked up tape warbles, moss and lichens, anything with a matte finish, smooth stones, skipping laser discs."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Touching once more on meditation, there's a Newton's cradle brand of hypnotism behind these compositions. Is there any science behind the sounds in Sleep Drive?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"My favorite of Brian Eno & Peter Schmidt's Oblique Strategy Cards says, \"repetition is a form of change\". the effects of repetitive patterns on the brain, and patterns that are trance inducing are subjects that are of high interest to me. repetition is a very enchanting thing for the brain. There have been studies done on repeated patterns, loops, and how that allows listeners to focus their attention on different aspects of the repeated phrases. I like to do a lot of layering with my textures, and they are usually subtly rhythmic, so when you zoom out you get the big picture, but as you get closer in and start recognizing all the different patterns that make up this one giant pattern, it's like your brain piecing together a mosaic."}
                </Text>
                <Text style={Cstyles.articleBodyItilized}>
                  Colin Blanton is Ant'lrd. He currently resides in Portland, Oregon.
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://antlrdsleep.bandcamp.com/releases')}>
                    {' Listen to Sleep Drive'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = SleepDrive;
