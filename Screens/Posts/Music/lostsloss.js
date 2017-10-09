import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class LostSloss extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View>
              <Image source={require('../../../assets/images/music/slosshead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Lost In The Sloss"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Elliott Moe</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by JP Davis</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Underneath the looming skeleton that once was Birmingham’s bloodline a two day festival took place that attracted everyone from cross dressers in appropriated Native American war bonnets to caucasian dads in khakis. All gathered at the altar of music to see how much beer could be consumed and then sweated out under the glaring southern sun. Across multiple stages a range of musical acts were presented, some falling flat on their face, busting a few teeth out, while others shone in the wasteland of stereotypical festival acts."}
                </Text>
                <Text style={Cstyles.articleBodyContentHeading}>
                  GROUPLOVE
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Group Love came out in a hail fire of raucous energy as the drummer beat the shit out of his set along to Asap Ferg’s latest hit track “New Level”. Heavy layered pop anthems raced along at a break neck speed that were unstoppable even as a man fell to the ground shuddering from an epileptic seizure. This caused their music to take an oddly sinister turn as bubble gum dreams of partying at a best friend's house smashed into the brutal realities of life. But a few moments after the man was safely taken away by paramedics (which took far too long to reach him; hopefully the response time to emergencies will improve) the audience was sucked back into the ineffable joy emoted on stage as the band's frontman tossed his sea foam green telecaster thirty feet in the air, caught it, and continued with the song. Showcasing their mastery of live performance, they flowed between intricate melodic and volume changes while ferociously jumping, rolling, and head banging across stage. Although the band sometimes slips into moments that are so positively optimistic they could be perceived as campy, they have an undeniable honesty that pervades their act. The five piece created an intriguing, wholly original sound that blended the emotional epic choruses of 90’s rock bands like Built to Spill with the energetic positivity of modern electronic music. These influences are reflected in the bands two vocalists: one having a quivering punk falsetto, the other a smooth polished voice. Both singers switch back and forth then link up for whaling choruses, which lends a unique lyrical quality to their music. From ripping guitar lines that pierced through the mix to dancing synth full of pop, they created a musical experience that lacked any of the traditional festival gimmicks yet was one of the most entertaining to watch.
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/sloss1.jpg')} style={Cstyles.articleHeadImage}/>
              <Image source={require('../../../assets/images/music/sloss2.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContentHeading}>
                  WHITE DENIM
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  This band was the sonic equivalent of eating at Wasabi Juans, their appearance and reputation superseding the actual content being delivered. What at first seemed to be a promising contemporary fusion of distinct genres and musical flavors actually resulted in a lackluster performance as flavorless as a sushi burrito. No one seemed too thrilled about White Denim aside from obviously stoned dudes in Chacos trying to grind against the abundant butts clasped in daisy duke denim. A contrived interpretation of the classic blues groove without any of the raw energetic creativity, the only high points were interesting synth refrains or guitar solos which served as reprieves from otherwise monotonous bass driven jams. Their technical skill was clear, but past the third song a distinct formula emerged of guys casually standing on stage playing major chord progressions with an instrument ever so slightly venturing into something unique then falling away. This quickly became tiresome and one by one the already small crowd meandered from the cover of the “Shed” stage preferring to melt than fall asleep. I left to remove the distinct taste of Black Keys jam band from my mouth with an over priced festival gyro.
                </Text>
                <Text style={Cstyles.articleBodyContentHeading}>
                  GLASS ANIMALS
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  A menagerie of young men bounding with adolescent energy captivated their audience with a future oriented sound. A concoction of beautiful synth tones seamlessly melded with an emphatic, eccentric rhythm made up of live and electronic percussion. Minimal guitar work added to the off kilter nature of the band and accented musical climaxes creating a soundtrack perfect for late night rendezvous in the city. The singer hushed out his vocals giving the sense of a barely repressed excitement full of apprehension. Lyrics about gooey earth worms and girlfriends eating from jars of mayonnaise gave a light hearted experiential quality to their music. The songs were packed with sounds yet gave a sense of space between the instruments which weaved the audience through subterranean grooves and volcanic inflections. Glass Animals definitely draws on the pineapple laden hipster culture, thus the crowdsurfing pineapple the band chucked out near the end of their set, but were able to surpass the typical with an original and engaging sound.
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/sloss3.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContentHeading}>
                  WASHED OUT
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Their first show in more than a year Washed Out sounded like the Tron Legacy soundtrack dipped in a vat of codeine. Slow electronic swells enveloped the audience like the plumes of purple fog rolling off stage. Syncopated techno beats extended infinitely into space, rocking tired bodies into a hypnagogic sense of pleasure. With melatonin seeping from pineal glands, spacey lullaby ballads echoed out into the growing night as the earth cooled and sore legs looked for a place to rest.
                </Text>
                <Text style={Cstyles.articleBodyContentHeading}>
                  RYAN ADAMS
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  The headliner of the first night played to a relatively small crowd of sweat drenched drunks, myself included. I only really remember one song about whiskey being in water, which from the lyrics I assumed to be an anthem about alcoholics. A girl from Dothan sang along word for word, one hand raised, twirling through the air as if sensually praising jesus. Like the classic southern draw of my grandparents the music flowed like syrup through the thick humidity and visions of people holding watermelons in rusty pick up trucks came to mind. My city ego slipped away with sips of Miller Lite and for a second I forgot I wasn’t wearing overalls.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = LostSloss;
