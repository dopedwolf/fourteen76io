import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Blood extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/else/blood/bloodhead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"Blood Equality: A Fight For Human Rights"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Jonathan Patrick</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Photography by Mateo Montoya</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"'It's not productive to the movement if I'm the focus,' Jordan Eagles said into his phone. He was speaking to a member of his marketing team in New York about a promotional video for his piece, Blood Mirror, a seven foot tall glass monolith filled with the blood of 59 donors denied the right to give blood due to their sexual orientation."}
                </Text>
              </View>
            </View>
            <Image source={require('../../../assets/images/else/blood/blood1.jpg')} style={Cstyles.articleHeadImagePortrait}/>
            <Text style={Cstyles.photoby}>Blood Mirror. Photo provided by Jordan Eagles</Text>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"After a little further coaxing, a new promo was sent to Eagles that included the names of the original nine donors, now permanently a part of Blood Mirror. \"You can't reduce activism -- an entire movement -- down to 'Art by So and So,'\" Eagles concluded as we wrapped up lunch and started walking toward the BCRI (Birmingham Civil Rights Institute) to see about the logistics of hauling a few hundred pounds of tall, fragile sculpture into the building."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Blood Mirror opened Sept. 22 at the BCRI as the first part of One In Our Blood, a collaborative series of art openings and panel discussions raising awareness for Blood Equality through December. The sculpture stands as a pillar of protest against medically dated laws and social stigmas toward those living with HIV/AIDS. According to Eagles, its intent is to unite, not polarize."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/blood/blood2.jpg')} style={Cstyles.articleHeadImageDescription}/>
              <Text style={Cstyles.photoby}>Test tubes that orignally held the blood used in Blood Mirror</Text>
              <View style={Cstyles.articleBody}>
                <Text style={Cstyles.articleBodyContent}>
                  {"\"The idea is that blood at its base can't determine whether someone is wealthy, can't tell if they're famous, or how many Instagram followers they have...For me to share this work in Birmingham, where we can look at the history of blood donation and see someone like Dr. Charles R. Drew, who invented blood banking, who couldn't donate blood to the system he created due to racial segregation...it's almost like history is repeating itself...in a negative way. But at the end of the day, regardless of what your political beliefs are, regardless of your race, sexual orientation, economic status, we're the same. We all have blood,\" said Eagles."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Eagles went on to explain that anti-stigma and fair blood donation policies for the LGBTQ community are equally important to the piece, although the factor that all mankind is bound by blood resonates particularly heavily with Blood Mirror. \"There are larger human issues that deeply inspire me with this work,\" he said."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Larger human issues indeed. A recent UCLA Williams Institute study by Ayako Miyashita and Gary J. Gates concluded that lifting the current one year celibacy requirement for homosexual men to donate blood could bring in up to 615,300 more pints of blood each year, a two to four percent increase. These donations could be used to save over 1 million lives annually."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"The social stigma surrounding HIV/AIDS is unparalleled, largely founded in the general public's lack of education on the state of modern treatments and testing. Eric Sawyer, Vice President of Public Affairs and Policy of GMHC (Gay Men's Health Crisis), shared a couple humbling stories pertaining to the isolation gay men faced during the height of the HIV/AIDS pandemic in the mid '80s."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"\"[At the beginning], because of the lack of knowledge about how it was spread and how to prevent getting it, because there were no treatments, because it was a sure fire death sentence, the stigma and discrimination that developed around HIV was strong and ugly and still persists today,\" said Sawyer."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"He continued, \"[In] one instance, my partner and I went into a restaurant to have breakfast...Scott sat down looking like a 125 pound skeleton, having lost all of his hair, and it was obvious that he was a person living with HIV. This waitress came over to us after Scott had taken a sip of his water...carrying a garbage can. She took the glass out of his hand, threw it in the garbage, swept all of the silverware into the garbage can, and started yelling, 'Get out! Get out! We don't treat diseased faggots in here!' That was symbolic of the kind of discrimination and hatred that people with AIDS faced.\""}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Remnants of this discrimination still linger, and are, according to Dr. Mike Saag, Director of the Center for AIDS Research at UAB, holding efforts back from defeating the disease."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Dr. Saag has been on the front lines of HIV/AIDS research since the early '80s. UAB made unprecedented advancements in treating and testing the disease, including the first use of multiple drugs at once in a \"cocktail\" that laid the groundwork for preventative, or PrEP, medications like Truvada. UAB researchers also boast the development of the first measurements of viral load in the bloodstream in the world. This test reveals if someone is infected even before the regular blood test is positive, a crucial part of keeping the blood supply safe."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Saag explained that in the early stages of the pandemic exclusion was necessary because the disease wasn't yet understood. However, for almost two decades now, tests and procedures have been up to the task of properly assessing at-risk blood donations."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"\"By 2000, the testing had become remarkably effective and when we combine that with...self exclusion [from the blood donation process]...for example, unprotected sex in the past two weeks--of anyone, it doesn't matter if they're men or women--or someone who has shared needles in the past two weeks, these are the only vulnerable periods in which the tests might miss. That's talking on the order of about 1 in 10 million people. Well, that risk is less than the risk of us getting killed in a plane crash,\" said Saag."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"When asked specifically whether erasing the stigma behind HIV/AIDS by means of education would help fight the disease, Dr. Saag replied, \"Yes, because a lot of people who are at the highest risk are afraid to let a potential partner know that they might be at risk, or that they may even have HIV.\""}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"He continued, \"What a lot of people don't realize is that if someone is tested and they are positive and they get into care and they get on successful therapy and their virus goes under detectable levels, not only will they live a normal lifespan within reason, they won't transmit the virus to other people so long as they are on treatment.\""}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Modern advancements are recognized as more than sufficient by professionals in the field of HIV/AIDS research. As with any social issue, however, the decision doesn't lie in the hands of the professionals, but within the solidarity and actions of the people. Currently, Blood Mirror sits aside the Declaration of Human Rights at BCRI, and aptly so. The results are in, the science has given the green light, but decades of discrimination and stigma are keeping the rights of potential donors and precious blood donations tethered in the ether."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/else/blood/blood3.jpg')} style={Cstyles.articleHeadImagePortrait}/>
              <Text style={Cstyles.photoby}>A counterpart to Blood Mirror, this piece is comprised of the medical waste used to create Blood Mirror</Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"For resources regarding HIV/AIDS testing, treatment, counseling, and involvement, press the link below."}
                </Text>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                    <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://gmhc.org/')}>
                      {' gmhc.org'}
                    </Text>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Blood;
