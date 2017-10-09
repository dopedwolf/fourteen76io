import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Cstyles from '../../styles/common';
import ImageSlider from 'react-native-image-slider';

class Crackerpackers extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.photoSeriesPage}>
            <View style={Cstyles.pieceTitle}>
              <Text style={Cstyles.photoSeriesTitle}>{"Cracker Packers"}</Text>
              <Text style={Cstyles.photoSeriesSubTitle}>Matthew MacPake</Text>
            </View>
            <ImageSlider images={[
                require("../../../assets/images/photography/cracker_packers/one.jpg"),
                require("../../../assets/images/photography/cracker_packers/two.jpg"),
                require("../../../assets/images/photography/cracker_packers/three.jpg"),
                require("../../../assets/images/photography/cracker_packers/four.jpg"),
                require("../../../assets/images/photography/cracker_packers/five.jpg"),
                require("../../../assets/images/photography/cracker_packers/six.jpg"),
                require("../../../assets/images/photography/cracker_packers/seven.jpg"),
                require("../../../assets/images/photography/cracker_packers/eight.jpg"),
                require("../../../assets/images/photography/cracker_packers/nine.jpg"),
                require("../../../assets/images/photography/cracker_packers/ten.jpg"),
                require("../../../assets/images/photography/cracker_packers/eleven.jpg"),
              ]} style={Cstyles.imageSliderP}></ImageSlider>
            <Text style={Cstyles.photoSeriesDescription}>{"The iconic Carr's of Carlisle factory has been synonymous with the city for nearly two hundred years. Home to the famous Carr's Table Water Biscuit as well as other British classics, Custard Creams, Bourbons, Ginger Nuts and many others under the McVitie's, Jacobs', Crawford's and Carr's brands."}</Text>
            <Text style={Cstyles.photoSeriesDescription}>{"On Friday 7th January 2005 heavy rainfall left Cumbria devastated by floods. Ten years later, in December 2015, history repeated itself when storm Desmond reeked widespread havoc across Cumbria, Lancashire & Yorkshire."}</Text>
            <Text style={Cstyles.photoSeriesDescription}>{"For a second time damage across the county was devastating. Carr's Biscuit factory was overwhelmed by the floodwaters (one estimate suggested that up to 10 million gallons of water flooded into the premises) and production lines were halted. The impact of the factory closure was felt across the country, and a national biscuit shortage was headline news. After months of painstaking cleaning and rebuilding, production begin again in April 2016 - not a moment too soon, as the nation demanded their much loved tea break treats."}</Text>
            <Text style={Cstyles.photoSeriesDescription}>{"Over the generations, workers at the factory have been affectionately nicknamed 'Cracker Packers'. This project celebrates those hardworking ladies and gentlemen, and re-opening of the factory, which in itself represents the resilience of City of Carlisle as it recovers once again."}</Text>
              <View style={Cstyles.noDescriptionShare}>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/website.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('http://www.mattmacpake.co.uk/')}>
                      {' mattmacpake.com'}
                  </Text>
                </View>
                <View style={Cstyles.shareSocial}>
                  <Image source={require('../../../assets/icons/insta.png')} style={Cstyles.shareSocialImage}/>
                  <Text style={Cstyles.shareSocialText} onPress={() => Linking.openURL('https://www.instagram.com/mattmacpake/')}>
                      {' Matt MacPake'}
                  </Text>
                </View>
              </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Crackerpackers;
