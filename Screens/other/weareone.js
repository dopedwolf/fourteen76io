import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, Linking} from 'react-native';
import Cstyles from '../styles/common';
import {Actions} from 'react-native-router-flux';

export default class WeAreOne extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Cstyles.pageContainer}>
            <Text style={Cstyles.contactSubmissions}>
              WE ARE ONE is a no-commission juried art auction featuring Alabama artists- both fresh faces and established talent. Inspired by WonderRoot’s “Imaginary Million,” created by Maggie Ginestra, WE ARE ONE provides a platform for artists of all backgrounds to exhibit, socialize, and collect each-others’ work.
            </Text>
            <Text style={Cstyles.contactSubmissions}>
              A three-person jury will select works by Alabama artists, covering a wide array of styles and media produced within the last three years. Each artist will submit one work for the auction and receive $10,000 in “imaginary money.” The phantom funds are the only currency accepted in the auction, allowing only participating artists to bid.
            </Text>
            <Text style={Cstyles.contactSubmissions}>
              Participating artists have the option to submit one additional work, on consignment, for sale at the gallery outside the auction. These artworks can be purchased by any event attendees.
            </Text>
            <Text style={Cstyles.contactSubmissions}>
              If you are a visual artist or photographer interested in taking part in the WE ARE ONE auction, click the link below to submit your work at no cost to you. 
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://fourteen76.submittable.com/submit/102699/we-are-one')}>
              <Text style={Cstyles.weareone_link}>
                SUBMIT YOUR ART
              </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    )
  }
}
