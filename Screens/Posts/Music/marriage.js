import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';

class Marriage extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/music/marriage.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitleItalized}>{"Marriage"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>Album by Tyler Holmes</Text>
                <Text style={Cstyles.photoSeriesSubTitlePhotographer}>Interview by Ahmad Jackson</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How long have you been making music?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I've been experimenting with sound for about 10 years, 'music' maybe 7."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Any particular influences driving you right now?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I'm really influenced by Black people surviving in the US, the QPOC community, single parents, anyone fighting patriarchy, plutocracy and standing up to ignorant assholes in general."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Music wise i'm into Tricky, Anohni, Grimes, Missy Elliott, Dan Boeckner (Handsome Furs, Operators,) Grouper, Xiu Xiu, Hyphy Music, Holly Herndon, Mykki Blanco, Cat Power and San Cha Y Las Sirenas & Vainhein; my babies! In Tennessee I saw a rapper named DELISH from NOLA and that shit was fire, i haven't had that much fun at a show in a long time."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I'm also really into 90s /early 2000s movies; Gregg Araki, Todd Solondz and all the classics; Clueless, Mean Girls (THE BIBLE), Romy and Michelle…"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"If you could classify your music under a genre, what would it be?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Always changing. currently its…like… ambient, pop, electro-acousitc, experimental, noise, r&b, hip-hop so…"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Ghost Gospel?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Church For Sluts?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Slutty Ghost?"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  So tell me about <Text style={Cstyles.articleBodyQuestionItalized}>Marriage</Text>. What themes would you say are most prevalent in the album?
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"The record is about divorcing one’s self from toxic ideas, pathologies,traumas relationships,fears and hurt feelings to survive. There's a lot of fear, love,sex and violent trauma being exorcised. There was a lot that i wanted to let go on this record, let's see if now that its out if i actually let the things go for real LOL."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/marriagealbum.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How was the process of recording it? Why Tape?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"The initial ideas for the album came over three years ago."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"One song I created with Keith Tadashi Kubota ( One Seven One Nine,) a long time friend and producer who worked with us on 'Google Google Apps Apps' with Persia and Daddie$ Pla$tik and countless other tracks with the gang."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"For the rest of the record I spent the greater part of that 3 year period recording with E (Eric of SF band PARAE) in SF in the tenderloin. I wanted to make it sound really diverse so i used very new and very old material and pushed myself to play new instruments and try new things. I played the mandolin, hammered dulcimer, electric bass, glockenspiel. All of which were very new to me but it was as fun as it was scary and i'm happy with the result."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Thanks for going through the trouble of buying a tape player to play 'Marriage.' I released it on tape because that's what Cool World Records, the label, makes. I have a tape player and i use a tape recorder as an instrument in live shows so it seemed fully logical for my analog ass to put out a tape. In 'The Psychick Bible' Genesis talks about the tape recorder as a weapon and i am a firm believer. I'm pretty sure my next release is going to be a tape as well this Fall."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How was your performance at Idapalooza?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"LOL I actually performed 3 times at IDA! my 1st day there, actually the 2nd day of the festival I played at 12:30am. I sang, rapped and sequenced the 404, played tape recorder and synth. I was an interim angel in the 3 part choir for San Cha Y Las Sirenas AND for the talent show Daddi$ Pla$tik (San Cha, vainhein, and myself) created a supergroup with Project Rage Queen called 'Vaca Bruja' which featured saxophone, writhing and screaming and me in a long black wig face down on the floor playing synth with all of my appendages."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"How is the queer music scene in Oakland?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"There are a lot of great queer artists still in Oakland that have yet to move to LA and they are making and releasing great work but the problem is all of the cool places for broke brown queerdos to play non-punk are closing down. Even the punk venues to be honest. All the marginalized groups were forced to co-exist and to perform in the same crusty spaces and that made us all grow and love our lives a tiny bit but now all of those places are closing because of gentrification."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Have you started touring yet?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"A little bit. IDA would be the start of my 'tour' I guess. I played a couple shows here in the bay, i'm doing a show with Cool World Records at Pehrspace Gallery in LA (which i believe is also being forced to move.)Then i'm coming back to the bay to play a few more shows then probably back to recording."}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"So far, what’s your craziest performance memory?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"My Uncle plays drums in a blues band that plays Sundays every Spring at the oldest bar in San Francisco, The Saloon. I was there in a full face with my mother, I sang a couple tracks with the band and then was hanging out. I saw from across the room a man showing some weird aggressive body language to my mother. Little did I know he had just called her a 'Jew Bitch.' So, I went up to this very drunk person and gently was trying to escort them out because the security in this tiny bar had not noticed the incident. He was going calmly and then suddenly shrank down flipped around and punched me in the mouth, I proceeded to hit him on the top of the head and he went down, it was only then that everyone noticed the black man with makeup on punching the elderly drunk. But luckily he was escorted and out and I was fine because my mother was there to corroborate."}
                </Text>
                <Text style={Cstyles.articleBodyItilized}>
                  {"Check out Tyler’s latest album Marriage on the link below, and show our dead Oakland girl some love!"}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://tylerholmes.bandcamp.com/')}>
                    {' Marriage'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Marriage;
