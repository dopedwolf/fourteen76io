import React from 'react';
import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const quarterHeight = (height / 4);
const halfWidth = (width / 2);
const postWidth = (width / 1.12);
const postWidthTwo = (width / 1.07);
const filterWidth = (width/ 2.3);
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
    backgroundColor: '#f9f9f9',
  },
  calendarPage: {
    paddingTop: 25,
    backgroundColor: '#f9f9f9',
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
    fontSize: 21.5,
    fontFamily: 'Alegreya-light',
  },
  popMenuItemsS: {
    marginBottom: 50,
    fontSize: 21.5,
    color: "rgb(223, 132, 176)",
    fontFamily: 'Alegreya-Bold',
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
    height: 25,
    width: 25,
  },
  menuItemPop: {
    height: 30,
    width: 30,
    marginRight: 18,
    marginLeft: 18,
  },
  postContainer: {
    height: 320,
    backgroundColor: '#fff',
    width: postWidthTwo,
    borderRadius: 1,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: 'rgb(199, 196, 196)',
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  calendarFiltering: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  filter: {
    marginTop: 25,
  },
  calendarFilter: {
    width: filterWidth,
    flexDirection: "column",
    justifyContent: "center",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 1,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: 'rgb(199, 196, 196)',
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  filterText: {
    textAlign: 'center',
    fontFamily: 'LoraBold',
    fontSize: 15,
    width: filterWidth,
  },
  postContainerEvent: {
      backgroundColor: '#fff',
      marginBottom: 20,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 10,
      paddingBottom: 5,
      width: postWidthTwo,
      borderRadius: 1,
      borderColor: '#fff',
      borderBottomWidth: 0,
      shadowColor: 'rgb(199, 196, 196)',
      shadowOffset: { width: 0, height: 1.2 },
      shadowOpacity: 0.6,
      shadowRadius: 2,
  },
  eventType: {
    alignSelf: "flex-end",
    fontSize: 11,
    fontFamily: "LoraBold",
    marginTop: -5,
    marginRight: 0,
    color: "#b1aeae",
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
    lineHeight: 20,
    marginTop: 5,
    fontSize: 16,
    alignSelf: 'flex-end',
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  postTitleItalic: {
    lineHeight: 20,
    marginTop: 5,
    fontSize: 15,
    alignSelf: 'flex-end',
    color: "#1E1E1E",
    fontFamily: 'LoraBoldItalic',
  },
  postTitleEvent: {
    fontSize: 15.5,
    marginBottom: 10,
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  postSub: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postSubEvent: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postSubCatEventDate: {
    fontSize: 15,
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  eventDescription: {
    marginTop: 6,
    marginBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: 15,
    color: "#1E1E1E",
    fontFamily: 'Alegreya-regular',
  },
  postSubCat: {
    marginTop: 5,
    lineHeight: 20,
    fontSize: 13,
    color: '#b1aeae',
    fontFamily: 'LoraBold',
  },
  postSubCatEventAddress: {
    fontSize: 12,
    color: '#b1aeae',
    fontFamily: 'LoraBold',
  },
  postSubCatEvent: {
    lineHeight: 20,
    fontSize: 14,
    color: '#b1aeae',
    fontFamily: 'LoraBold',
  },
  postImage: {
    width: postWidthTwo,
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
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  photoSeriesTitleItalized: {
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10,
    color: "#1E1E1E",
    fontFamily: 'LoraBoldItalic',
  },
  pieceTitleAbove: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  photoSeriesSubTitle: {
    color: "#1E1E1E",
    fontSize: 11.5,
    fontFamily: 'LoraBold',
  },
  photoSeriesSubTitleAuthor: {
    color: "#1E1E1E",
    fontSize: 11.5,
    fontFamily: 'LoraBold',
  },
  photoSeriesSubTitlePhotographer: {
    fontSize: 11.5,
    marginTop: 5,
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  photoby: {
    fontSize: 13,
    marginTop: -10,
    marginBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    color: "#1E1E1E",
    alignSelf: 'center',
    fontFamily: 'Alegreya-regular',
  },
  photoSeriesDescription: {
    lineHeight: 29,
    paddingLeft: 12,
    textAlign: 'center',
    paddingRight: 12,
    marginTop: 15,
    fontSize: 17.5,
    color: "#1E1E1E",
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
    lineHeight: 29,
    color: "#1E1E1E",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 17.5,
    fontFamily: 'Alegreya-regular',
  },
  articleBodyContentHeading: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 15,
    fontSize: 22,
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  articleBodyQuestion: {
    lineHeight: 29,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  articleBodyQuestionItalized: {
    lineHeight: 29,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 16,
    color: "#1E1E1E",
    fontFamily: 'LoraBoldItalic',
  },
  articleBodyItilized: {
    lineHeight: 29,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 17.5,
    color: "#1E1E1E",
    fontFamily: 'Alegreya-italic',
  },
  articleBodyItilizedBold: {
    marginTop: -7,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    fontSize: 17.5,
    color: "#1E1E1E",
    fontFamily: 'Alegreya-BoldItalic',
  },
  quote: {
    paddingBottom: 15,
  },
  articleBodyItilizedAbove: {
    lineHeight: 29,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    fontSize: 17.5,
    color: "#1E1E1E",
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
    padding: 8,
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
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  shareSocialImage: {
    height: 25,
    width: 25,
  },
  contactPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  submitContainer: {
    width: width,
    padding: 13,
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
    lineHeight: 29,
    fontSize: 14,
    marginTop: 7,
    color: "#1E1E1E",
    marginBottom: 10,
    fontFamily: 'LoraBold',
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
    lineHeight: 29,
    fontSize: 12,
    marginTop: 7,
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
  },
  contactSubmissions: {
    lineHeight: 29,
    textAlign: 'center',
    fontSize: 16,
    width: width,
    paddingRight: 10,
    paddingLeft: 10,
    color: "#1E1E1E",
    fontFamily: 'LoraBold',
    marginBottom: 10,
  },
  contactEmailIcon: {
    height: 21,
    width: 21,
  },
  submitInclude: {
    lineHeight: 29,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 13,
    color: "#1E1E1E",
    fontFamily: 'Alegreya-regular',
  },
  submitIncludeEndOne: {
    lineHeight: 29,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    color: "#1E1E1E",
    fontFamily: 'Alegreya-regular',
  },
  submitIncludeEnd: {
    lineHeight: 29,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 10,
    color: "#1E1E1E",
    fontFamily: 'Alegreya-regular',
  },
});

module.exports = Cstyles;
