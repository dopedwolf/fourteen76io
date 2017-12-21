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
                <Text style={Cstyles.photoSeriesSubTitleAuthor}>Interview and Photography by Elliott Moe</Text>
              </View>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"In the dull, incandescent light of the Louisiana, the sultry voices of The Marvelettes sing ‘Please Mr. Postman’ through raspy, old speakers, as Shame eat a cozy meal of chicken and potatoes. The five young men, all clocking in under twenty-one, have just finished a sound check that shook the dust from the ceiling and rattled pint glasses behind the small bar. Later in the evening, this quaint family-owned pub hosted a sold-out show filled with sweaty youths high off their own adrenaline – and quite possibly other substances. Guitarist Sean Coyle-Smith requests we conduct the interview outdoors, where cigarettes can be rolled and smoked in the approaching dusk. He’s joined by Charlie Forbes, drummer, and Charlie Steen, vocalist, on one of the benches lining the white-walled façade of this unassuming local. A conversation starts with details of their upcoming tour through the States."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Forbes mentions that their first gig is in New York and jokingly asks ‘New York? What was wrong with the old York?’ This elicits a slight chuckle from Coyle-Smith and Steen, in a serious monotone, declares that it’ll be the band’s first time in the city. They’ll be playing November 11th at Brooklyn’s Baby’s All Right, a venue popularised, much like The Louisiana, for its ability to provoke a raucous intimacy among its patrons. The tour will then continue for another eight dates through the land of the Big Mac, until their last show in Delaware at the Arden Music Hall. It is there, in what looks like a remodelled ski-lodge, that Coyle-Smith and Forbes excitedly tell me they’ll be playing with Ought, one of the most revered post-punk bands still currently active."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame1.jpg')} style={Cstyles.articleHeadImage}/>
             <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"This will be Shame’s second time playing in America since they first went across the pond to perform at SXSW earlier this March. It seemed to be a group consensus that America was a rather strange place with perhaps even stranger people. Steen recounted a story from this previous trip, of a less than savoury group of gentlemen loitering under a highway overpass, who were rather keen on providing the band and all their equipment with a ride. The offer was courteously declined and Shame was able to make it to their gigs, where during one memorable performance, Steen stripped down to his boxers and attempted to climb a photo booth."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"This rowdy ‘throw your cares and your clothes to the wind’ persona was not what I got amidst interviewing three-fifths of the band, though. Coyle-Smith sat casually rolling tobacco looking like Kurt Cobain’s kid brother; blonde hair parted down the middle, swept behind the ears, and framing his blue eyes. Forbes was laid back, yet attentive to the discussion and the meticulous sprinkling of a little extra jazz into his papers. Steen sat leaning forward, clasped in a leather jacket, talking to me in a downwardly cast, brooding gaze as if some visage of the future was materialising a few feet behind the back of my skull. The three of them together, including the rest of the band, share a comfortability among each other that only comes from growing up in the same place and having shared experiences. So, I ask how long they’ve all known each other, getting a slurry of responses."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame2.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"Forbes answers first, ‘Me and the other guitarist have known each other since we were like five and most of them have known each other since they were babies.’ ‘We all basically kind of went to school together, pretty much,’ says Coyle-Smith. Steen clarifies; ‘We all grew up together and we’re all like close to each other in South London, and we’ve been in the band since I was sixteen and everyone else was seventeen.’ I tell them I just had a good friend that was staying in South London with her aunt and Coyle-Smith describes their home town as ‘definitely the kinda place your aunt would live.’ They’ve been playing together for the last three years now, and from their recently growing popularity, they haven’t done badly for their first musical endeavour."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Steen explains that their musical success was ‘a very gradual process.’ Coyle-Smith puts it more elegantly admitting that it took them ‘quite a while to get not shit, basically.’ I remark that they’re lucky they were spared the embarrassment of any rubbish band names, but Steen says they weren’t, the others ‘are just not for public domain.’ ‘First times the charm’ chimes in Coyle-Smith, obtusely recognising their accomplishments as a band. Their tight-knit comradery defines their friendship, and is the foundation of the way the band crafts their music. ‘I write all the lyrics and I leave the music up to the musicians. But, if we’re not all completely sold on something, then we won’t continue with it any further. We’re not a band where one particular person is the leader, we’re a band where everyone has their own individual say,’ Steen tells me."}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame3.jpg')} style={Cstyles.articleHeadImage}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {"The band has also benefitted from what on the outside, appears to be a London music community that’s creatively incestuous in the best way possible. Fellow punk band Goat Girl released a video for their song Scum which was directed by Holly, the girlfriend of second Shame guitarist, Eddie Green. The video depicts a series of people with oatmeal and baby food sloshing from their mouths. In two of the vignettes, Green can be seen dribbling in a button down along with Coyle-Sean fashionably spitting up oats while wearing shades made famous by Natural Born Killers’ Mickey Knox. The collaborative energetic scene in London has surely influenced the band’s sound in conjunction with England’s eclectic history of post-punk bands. Classic English pioneers of the genre like Joy Division and Television Personalities can be heard in a modern, viscerally youthful incantation when listening to Shame."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`So far, the band has released four stand-alone singles: `}<Text style={Cstyles.articleBodyItilized}>Gold Hole, Tasteless, The Lick, and Visa Vulture.</Text>{` These tracks have helped place them prominently into the burgeoning catalogue of bands responsible for what has been labeled as the ‘post-punk revival’. `}<Text style={Cstyles.articleBodyItilized}>Visa Vulture</Text> {` stands out of this lineup for its unbridled satire and uniquely smooth surf-pop quality which serves both as a critique on the overwhelming expanse of indie boy bands and a depiction of the bands’ underlying political consciousness. The art for this particular track depicts a long set of vampire teeth poking out from Theresa May’s deceptive smile, insinuating the two-faced nature of her political career and ultimately a lust for blood. Steen drops his usual rugged vocals on this song for a more harmonious voice singing “Oh Theresa baby, we’ve been going for a while…Do you feel like a commoner, exposed and dominated? Have you gained a moral conscious or are you not that degraded?” Similar social and political commentary can be heard on other tracks like The Lick and Tasteless, making the band standout against the sea of young male musicians who seem to still be hung up on the concept of unrequited love.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {"Similar social and political commentary can be heard on other tracks like ‘The Lick’ and ‘Tasteless,’ which makes the band stand out against the horde of young male musicians who seem to be still hung up on the concept of unrequited love."}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`When I pose the question of whether the band purposely sets out to make songs like this Steen remarks; ‘I think as a band we are quite political but that’s not something we ever set out to be, it’s something that might come quite subconsciously.’ Steen’s political insights may have begun with his father who was a journalist who according to one source, wasn’t afraid of mixing it up with the politicians. But Steen credits the inspiration for his subversive and third person lyrics to the variety of music he experienced in London and the recent rebirth or exposure, depending on how you look at it, of radical conservatism in the political landscape of Western society. ‘When I was sixteen I assumed the go-to lyrics would be about like a breakup or all these things revolving around love. But being exposed to a lot of different lyricists I started to sort of realize that you can talk about a lot of other things that don’t have to revolve around the predictable. None of the songs are really from my perspective.’`}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame4.jpg')} style={Cstyles.articleHeadImagePortrait}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {`‘Concrete,’ their newest and first single from their debut album, scheduled to be released mid-January, continues this lyrical quality and shows an improved level of production along with an increased sense of nuance in their songwriting. ‘The production style is done in quite a Martin Hannet way, where the drums and the bass are very prominent as the pulse’ explains Steen as he describes the methods used to create their latest track. Martin Hannet is the legendary producer of Joy Division’s Unknown Pleasure and Closer. He’s often heralded as being the creative genius behind the birth of the post-punk genre. By running extremely controlled drumming through delay and having the bass particularly present in the mix Hannet created, an entirely new and modern interpretation of punk that has left an indelible mark on modern music. This influence is clear on the track and hints at what can be expected from the upcoming album.`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`Unexpectedly, a wave of startled exclamations passes through the table as some tall, lanky individual walks up to us. I give Forbes a confused look and he explains ‘this is the dude we did our record with.’ This is when I’m introduced to Joe Jones, who worked as the studio engineer alongside Sean Genockey on Shame’s album. Jones and Genockey worked several times together in the Wales-based studio where the album was recorded. According to Jones, this intimate knowledge of the studio helped them know what types of equipment to use and how to mic the drums in a manner that would provide an interpretation of the sound found on a Martin Hannet-produced track.`}
                </Text>
              </View>
              <Image source={require('../../../assets/images/music/shame5.jpg')} style={Cstyles.articleHeadImagePortrait}/>
              <View style={Cstyles.articleContent}>
                <Text style={Cstyles.articleBodyContent}>
                  {`The concise precision and compressed attack of Forbe’s drums on the track Concrete creates a drum machine-like quality that emulates, in a way, the drum machines Hannet used on a few Joy Division tracks. The drums and bass build a tight rhythm, which provides sonic space for the guitars to have interesting dynamics and move the song forward. Genockey, being an avid guitar player himself, and working in studios for bands like The Pixies, gave the band access to a person incredibly knowledgeable in the world of guitars. The band also had access to a myriad of vintage guitars, amplifiers, and pedals to achieve a modernized version of classic sounds. Coyle-Smith explains that for live shows, though they use a fairly stripped back set up to accommodate for their habit of thrashing around on stage`}
                </Text>
                <Text style={Cstyles.articleBodyContent}>
                  {`Gradually a group gathered around the table and somewhere between our first and third beer, the interview ended. I followed the band upstairs through the narrow staircase with a camera in hand in an attempt to capture the ensuing anarchy. Emerging in what felt like a washing machine of human torsos, I tried my best to blindly snap photos without destroying the camera. After the show, Coyle-Smith invited me to join them for a night cap at the Old England, where they were cordially invited to take refuge by the bassist of LICE, who was clad in cowboy apparel adorned with leather tassels. It was here that the night fell into debauchery. The smoke of a jillion cigarettes lingered in a grey haze around the billiards table, where arm-wrestles and the exchange of saliva ensued. The band has managed to remain humble despite their budding stardom. With a high-speed van chase after Iggy Pop from a festival, and a performance at Pitchfork Paris already in their list accomplishments, it’ll be very interesting to see what the future holds for Shame.`}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Shame;
