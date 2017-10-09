import React from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image, Linking} from 'react-native';
import Cstyles from './styles/common';
import {Actions} from 'react-native-router-flux';

class Contact extends React.Component {
  render() {
    return (
      <View style={Cstyles.container}>
        <ScrollView>
          <View style={Cstyles.pageContainer}>
            <View style={Cstyles.contactPage}>
              <View style={Cstyles.submitContainer}>
                <View style={Cstyles.submitContainerHead}>
                  <Text style={Cstyles.contactSubmissions}>
                    {"Are you an artist insterested in being featured on Fourteen76?"}
                  </Text>
                </View>
                <Text style={Cstyles.submitInclude}>
                  Please inlcude the following in an email:
                </Text>
                <Text style={Cstyles.submitInclude}>
                  A short bio. Your name, where you are from, and any education you may have received pertaining to your work. Also, when you became concerned with the realm of art, whether that be professionally or just in general; the spark that truly drew you in
                </Text>
                <Text style={Cstyles.submitInclude}>
                  A small statement regarding the pieces in question, your approach to these pieces, and any influences on them and on you as an artist
                </Text>
                <Text style={Cstyles.submitInclude}>
                  The pieces themselves and their titles (if they have titles)
                </Text>
                <Text style={Cstyles.submitInclude}>
                  When it comes to photo series we ask for a minimum of five photographs
                </Text>
                <Text style={Cstyles.submitInclude}>
                  There is no limit to the amount of pieces you can submit
                </Text>
                <Text style={Cstyles.submitInclude}>
                  We truly appreciate your time and are always looking to grow the community of artists we’ve been lucky enough to showcase on our platform. Responses are sent out in order of which we receive submissions. Thank you for your patience, if it comes down to you having to practice any. Feel free to email us with any other questions. We will be in touch!
                </Text>
                <Text style={Cstyles.submitIncludeEndOne}>
                  Your art buds,
                </Text>
                <Text style={Cstyles.submitIncludeEnd}>
                  Fourteen76 Staff
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:submission@fourteen76.com?subject=Artist%20Submission')} style={Cstyles.submitTouchable}>
                  <Text style={Cstyles.contactSubmissions}>
                    {"submission@fourteen76.com"}
                  </Text>
                  <Image source={require('../assets/icons/email.png')} style={Cstyles.contactEmailIcon}/>
                </TouchableOpacity>
              </View>
              <View style={Cstyles.otherInquiries}>
                <Text style={Cstyles.contactSubmissions}>
                  {"In regards to any other inquiries, feel free to reach us at the email below"}
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:contact@fourteen76.com')} style={Cstyles.submitTouchable}>
                  <Text style={Cstyles.contactSubmissions}>
                    contact@fourteen76.com
                  </Text>
                  <Image source={require('../assets/icons/email.png')} style={Cstyles.contactEmailIcon}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
    );
  };
};

module.exports = Contact;
