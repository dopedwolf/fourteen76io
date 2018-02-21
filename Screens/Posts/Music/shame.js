import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class Shame extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/music/shamehead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Shame"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Elliott Moe</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Eddie, Josh, Sean, Charlie and Charlie, formally known as Shame, waded through a packed-out crowd at the Louisiana, jumped on stage, then preceded to play one of the best shows I’ve seen this year."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Within a matter of seconds, they turned a tentative crowd into a tumultuous pit of flailing limbs and dripping sweat. Their live performance called to mind the canon of revered punk bands of the past but still managed to forge an individualistic sound. In the spirit of Joy Division, chugging bass lines along with airtight drums held together a speeding set, while guitars danced over the top cutting from cavernous expanses of wailing reverberation to subtle textural elements."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame1.jpg')} style={Cstyles.articleHeadImage}/>
             <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {`It was only a few songs in before frontman Charlie Steen disrobed himself of his ironic yet flattering school boy goes punk uniform and was being hoisted up upon the hands of the listeners. His manic, brooding antics on stage hints at influences like Iggy Pop. Vocally though he has the flexibility to go from guttural screams reminiscent of hardcore punk to a more melodic tone when the time calls for it.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`This can especially be heard on Shame’s newly released single ‘Concrete’, taken from their unreleased debut album. This song has a call and response structure built off Steen’s despondent questions like “Do you feel replaced?” to which bassist Josh Finerty gives the depression riddled response “Feel like there’s nothing at all.” The tune slowly builds into an existential reflection full of ecstasy with Steen beautifully screaming “I hope that you’re hearing me,” as the song crashes into its climax. When performing ‘Concrete’ live the band flagellated around the stage running into one another, and knocking over mic stands. The guitars gradually lulled into a gentle feedback and Steen, arms outstretched on either side of him, took on some bastardized vision of the crucifix, while hands clamoured around his profusely perspiring body.`}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame2.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {`Shame’s short, fierce set ended with Steen climbing atop the PA squishing himself against the low hanging ceiling, yelling lyrics in unison with the audience. This show was the first on a tour that will take them through the U.K. and around North America, despite the long trip ahead they left everything on stage. The visceral energy they harness while playing will be sure to intoxicate people throughout their journey and give people a reason to say “punk’s not dead.”`}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame3.jpg')} style={Cstyles.articleHeadImage}/>
              <Image source={require('../../../assets/images/music/shame4.jpg')} style={Cstyles.articleHeadImagePortrait}/>
              <Image source={require('../../../assets/images/music/shame5.jpg')} style={Cstyles.articleHeadImagePortrait}/>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Shame;
