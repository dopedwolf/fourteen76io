import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Psychic extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.headPhotoContainer}>
              <Image source={require('../../../assets/images/music/psycichead.jpg')} style={Cstyles.articleHeadImage}/>
            </View>
            <View style={Cstyles.articleBody}>
              <View style={Cstyles.pieceTitleArticle}>
                <Text style={Cstyles.photoSeriesTitle}>{"PSYCHIC HOTLINE"}</Text>
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>By Ahmad Jackson</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyItilized}>
                  On an unsurprisingly humid afternoon, I saunter past the courtyard in the French Quarter. Half of the painters have packed up their works for the day, but the mediums and tarot readers are still out and fanning themselves. One such tarot reader draped in garb fit for a Walt Disney gypsy asks me for aid in adjusting the umbrella shading her stand. I don't hesitate because tourists shouldn’t really fear much at this hour in the Quarter. The opportunistic nature of New Orleans comes out to play at later hours of the night. I relearned this lesson well the previous night and found myself weary and irritable, but I help the woman nonetheless. When the umbrella’s fixed, she thanks me, and asks if I’d care for a reading. I decline, but she wishes me a Happy Decadence and flashes an all-knowing smile before sending me on my way. My paranoia ponders on how many different ways she had courted customers for a reading. I’m still curious of that woman’s sales pitch when I meet Ruth Ex at the coffee shop. A petite frame sports a menagerie of tattoos and piercings balancing against an androgynous haircut and dark lipstick; Ruth Ex is as hungover as I am from the events of Southern Decadence, so the coffee is well appreciated. Their voice is soft and polite as Ruth Ex explains the house show approaching in four or so hours. Their voice, coupled with the jingling of the chains attached to their translucent choker, reminds me of the descriptor on their online profile--”Hard Femme.” This political state of queerness celebrates femininity and works to dismantle the heterosexist policies of the gender binary. Even at an unconscious level, artwork will always carry expressions of their creator’s anima or animus, and Ruth Ex’s Psychic Hotline is thankfully expressing their anima.
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  So tell me about the origin of Psychic Hotline? You said it began with certain type of organ?​
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Psychic Hotline began about two years ago when I found an electric chord organ in a free box. They are these wheezing, grating sounding toy instruments that were popular in the 60's. I had really never played music before. I was always intimidated by the idea because every time I tried I had never been able to come close to making the kind of sounds I wanted to hear. I really connected with this instrument though. I got a clunky 70's drum machine and some effects pedals and started making music. It felt like i had opened up a portal inside myself and all kinds of things started spilling out. The project's sound has evolved a lot since the beginning as I learned more about making electronic music. I still like to work with "outdated" technology and use nostalgic sounds.
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  Where did you get the name from?​
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I like the name Psychic Hotline because it brings to mind images of late night TV mediums or some kind of direct line of communication to another realm. In my performances I am trying to very literally channel rage and joy from different sources and merge it with my own emotion. It's about transforming these transmissions (whether they are coming from ghosts or friends or my own demonic current) into something psychical and tactile. I believe that music, and in particular dance music, is a powerful form of occult technology. It's something that can momentarily heal the false split of mind and body that most of us are living with as our daily reality.​"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  What about your influences?
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"When I first started the project I was feeling really alienated from and angry at the gay male culture I was coming of age in. It was a combination of desire and dysphoria that had me feeling all fucked up. I was also doing research into the history of radical queer movements in particular ACT UP and STAR. I felt like those struggles were being either ignored or depoliticized and whitewashed by modern mainstream LGBT groups who continued to throw the most marginalized members of our community under the bus. I wanted to channel this rage that was coming from the past as well as the present and express it in a way that was feminine and aggressive and ugly and cathartic. I don't think most 'gay art' (whatever that means) is angry or confrontational enough for these shitty times we are living in."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/psychic1.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Nor does it express a great deal of the aggressive queer feminine power. The works that have gained more attention tend to focus on masculine aspects of queerness. That’s why I was drawn to your work. Now, you said that you had been exploring the origins of electronic music. Can you elaborate on that, please?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  Looking into the history of electronic music really helped put what I do into perspective. Goth and Industrial music was my gateway to finding out about trans artists like Genesis Breyer P Orridge, Cindytalk, and eventually Wendy Carlos. I like the way that there is a lot blurring of the experimental and conventional in electronic music. Knowing that Cosey Fanni Tutti (of Throbbing Gristle and Chris and Cosey) was stripping to Donna Summer (whose music is so innovative and underrated btw) and bringing that influence into her own work which later helped shape the sound of synth pop and techno. I love learning about how those things overlap. I had for a long time thought that techno and house music were really vapid genres meant for car commercials and bad gay clubs but learning about how they have been white washed and decontextualized over the years changed everything. The early techno music being made in Detroit by groups like Underground Resistance was fiercely political. Early house from artists like Frankie Knuckles was born in gay clubs. Both of these genres are examples of the all too familiar pattern of artistic innovations made by Black artists getting co-opted and robbed of their meaning.
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Dragging these disenfranchised spirits of the past and present through recycled technology to project a grim future of sexuality. It makes me clutch my pearls in the best way. So tell me about your science fiction themes? What are some science fiction tomes you recommend?​"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I'm very influenced by the aesthetics and general paranoid vibe of sci-fi literature. Since I use technology as a musical instrument it's pretty fitting. One of the most influential writers for me has been Samuel R. Delaney. His writing is always rigorous and challenging but can also suddenly become lowbrow and totally perverted. I love William Gibson's cyberpunk novels written in the 80's. They have great atmosphere and it's fascinating to hear what role someone at that time thought the internet was going to play in our lives today. I am also very inspired by Metropolarity, a collective of POC Sci Fi writers based in Philadelphia. Their work uses science fiction and afrofuturism as a lens to examine current political struggles.​"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Tell me about the music video. You said it’s actually mostly done through analog technology?​"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"The music video for \"Luxury\" was created by Nihil Minus, a really amazing video artist. The video clips were taken from the internet, then played onto a CRT television set. All of the effects were created by an analog video synthesizer, which operates in a similar way to a synth you would make music with, except it manipulates the video signal instead of sound. I'm probably not explaining this right though. It was all Nihil. They are amazing, check out more of their work!"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"It’s amazing that it was done with analog tech. It’s a pretty dysmorphic biopsy of humanity synchronizing with technology to the point of identity and sexuality being as digital as our currency. And the accompanying EP. Tell me about your process on making it.​"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"The track comes from an EP I recorded almost entirely in my bedroom last spring called Phone Sex. A lot of the songwriting was inspired by getting a smartphone for the first time. I was thinking about how bizarre it is that we have these devices constantly on our being which could show us images of the most horrible atrocities happening around the world or the preferences of potential sexual partners in a several mile radius. Feeling freaked out about how we have willfully allowed government surveillance into our lives. Feeling hopeful about how the internet has decentralized media and how marginalized voices are using it to carve out space and organize.​"}
                </Text>
                <Text style={Cstyles.articleBodyQuestion}>
                  {"Any other projects you’d care to tell the people about?"}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"I'm excited about touring more in the near future with this project and also my band Special Interest. I'm in the process of recording my first full length album which will hopefully be released in early 2017."}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://psychich0tline.bandcamp.com/')}>
                    {' Phone Sex'}
                </Text>
              </View>
              <View style={Cstyles.shareSocial}>
                <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/psychic_handjob/')}>
                    {' psychic_handjob'}
                  </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Psychic;
