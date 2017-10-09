import React from 'react';
import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const quarterHeight = (height / 4);
const halfWidth = (width / 2);
const postWidth = (width / 1.12);

const headImage = (height / 2.4);
const headImagePortrait = (height / 1.5);


const Cstyles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center'
  },
  betaMessage: {
    fontSize: 12,
    color: 'red',
    paddingLeft: 5,
    paddingRight: 5,
  },
  pageContainer: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    alignItems: 'center',
  },
  popContainer: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  upMenu: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  popMenuSideOne: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  popMenuSideTwo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  popMenuSideThree: {
    height: quarterHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  popMenuItems: {
    marginBottom: 50,
    fontSize: 19,
    fontFamily: 'Alegreya-light',
  },
  MainNavBar: {
    position: 'absolute',
    width: width,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#868686',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  popMenu: {
    position: 'absolute',
    width: width,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#ffffff',
  },
  menuItem: {
    height: 30,
    width: 30
  },
  menuItemPop: {
    height: 30,
    width: 30,
    marginRight: 18,
    marginLeft: 18,
  },
  postContainer: {
    height: 300,
    backgroundColor: '#fff',
    width: postWidth,
    borderRadius: 1,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#b3aeae',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  postContainerEvent: {
      backgroundColor: '#fff',
      marginBottom: 20,
      width: postWidth,
      borderRadius: 1,
      borderColor: '#fff',
      borderBottomWidth: 0,
      shadowColor: '#b3aeae',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
  },
  postTouchable: {
    marginBottom: 20,
  },
  subPostContainer: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
  },
  postTitle: {
    marginTop: 5,
    fontSize: 15,
    alignSelf: 'flex-end',
    fontFamily: 'BreeSerif-regular',
  },
  postTitleItalic: {
    marginTop: 5,
    fontSize: 15,
    alignSelf: 'flex-end',
    fontFamily: 'BreeSerif-Italic',
  },
  postTitleEvent: {
    fontSize: 15.5,
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontFamily: 'BreeSerif-regular',
  },
  postSub: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postSubEvent : {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postSubCatEventDate: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'BreeSerif-regular',
  },
  eventDescription: {
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: 13,
    fontFamily: 'Alegreya-regular',
  },
  postSubCat: {
    fontSize: 12,
    color: '#939393',
    fontFamily: 'BreeSerif-regular',
  },
  postSubCatEventAddress: {
    fontSize: 10,
    color: '#939393',
    fontFamily: 'BreeSerif-regular',
  },
  postSubCatEvent: {
    fontSize: 13,
    color: '#939393',
    fontFamily: 'BreeSerif-regular',
  },
  postImage: {
    width: postWidth,
    resizeMode: 'cover',
    height: undefined,
    alignSelf: 'center',
    flex: 1,
  },
  postImageEvent: {
    width: width,
    resizeMode: 'cover',
    height: undefined,
    alignSelf: 'center',
    flex: 1,
  },
  imageSliderP: {
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },
  pieceTitle: {
    marginBottom: 30,
    alignItems: 'center',
  },
  pieceTitleArticle: {
    marginBottom: 35,
    alignItems: 'center',
  },
  photoSeriesTitle: {
    fontSize: 23,
    textAlign: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 10,
    fontFamily: 'BreeSerif-regular',
  },
  photoSeriesTitleItalized: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'BreeSerif-Italic',
  },
  pieceTitleAbove: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  photoSeriesSubTitle: {
    fontSize: 11.5,
    fontFamily: 'Alegreya-regular',
  },
  photoSeriesSubTitleAuthor: {
    fontSize: 11.5,
    fontFamily: 'Alegreya-regular',
  },
  photoSeriesSubTitlePhotographer: {
    fontSize: 11,
    marginTop: 5,
    fontFamily: 'Alegreya-regular',
  },
  photoby: {
    fontSize: 12,
    marginTop: -10,
    marginBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    alignSelf: 'center',
    fontFamily: 'Alegreya-regular',
  },
  photoSeriesDescription: {
    paddingLeft: 12,
    textAlign: 'center',
    paddingRight: 12,
    marginTop: 15,
    fontSize: 15,
    fontFamily: 'Alegreya-regular',
  },
  photoSeriesPage: {
    marginTop: 20,
    marginBottom: 100,
  },
  articleHeadImage: {
    height: headImage,
    flex: 1,
    width: width,
    marginBottom: 10,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  articleHeadImageDescription: {
    height: headImage,
    flex: 1,
    width: width,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  articleHeadImagePortrait: {
    marginTop: 10,
    marginBottom: 18,
    width: postWidth,
    resizeMode: 'cover',
    height: headImagePortrait,
    alignSelf: 'center',
    flex: 1,
  },
  articleBody: {
    paddingTop: 10,
    marginBottom: 15,
  },
  articleBodyContent: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontFamily: 'Alegreya-regular',
  },
  articleBodyContentHeading: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'Alegreya-Bold',
  },
  articleBodyQuestion: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontFamily: 'Alegreya-Bold',
  },
  articleBodyQuestionItalized: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontFamily: 'Alegreya-BoldItalic',
  },
  articleBodyItilized: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 15,
    fontFamily: 'Alegreya-italic',
  },
  articleBodyItilizedBold: {
    marginTop: -7,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    fontSize: 13,
    fontFamily: 'Alegreya-BoldItalic',
  },
  quote: {
    paddingBottom: 15,
  },
  articleBodyItilizedAbove: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'Alegreya-italic',
  },
  loadMore: {
    height: 30,
    width: 30,
  },
  pageNav: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 35,
  },
  filled: {
    height: 10,
    width: 10,
    marginRight: 15,
  },
  unfilled: {
    height: 17,
    width: 17,
    marginRight: 15,
  },
  shareSocial: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  noDescriptionShare: {
    marginTop: 30,
    marginBottom: 40,
  },
  shareSocialText: {
    fontSize: 16,
    fontFamily: 'Alegreya-Bold',
  },
  shareSocialImage: {
    height: 20,
    width: 20,
  },
  contactPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  submitContainer: {
    width: width,
    padding: 10,
    marginBottom: 50,
    alignItems: 'center',
  },
  otherInquiries: {
    width: width,
    padding: 10,
    marginBottom: 50,
    alignItems: 'center',
  },
  contactTouchableTextOther: {
    fontSize: 14,
    marginTop: 7,
    marginBottom: 10,
    fontFamily: 'BreeSerif-regular',
  },
  submitContainerHead: {
    marginBottom: 15,
  },
  submitTouchable: {
    width: width,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  contactTouchableText: {
    fontSize: 12,
    marginTop: 7,
    fontFamily: 'BreeSerif-regular',
  },
  contactSubmissions: {
    textAlign: 'center',
    fontSize: 16,
    width: width,
    paddingRight: 10,
    paddingLeft: 10,
    fontFamily: 'BreeSerif-regular',
    marginBottom: 10,
  },
  contactEmailIcon: {
    height: 21,
    width: 21,
  },
  submitInclude: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 13,
    fontFamily: 'Alegreya-regular',
  },
  submitIncludeEndOne: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Alegreya-regular',
  },
  submitIncludeEnd: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'Alegreya-regular',
  },
});

module.exports = Cstyles;
