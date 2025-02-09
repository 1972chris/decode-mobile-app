/*
 * DECODE App – A mobile app to control your personal data
 * Copyright (C) 2019 – Thoughtworks Ltd.
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: ula@dribia.com
 */

import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  attributesLandingContainer: {
    flex: 10,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  attributesManagementContainer: {
    flex: 10,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingVertical: 20,
  },
  attributesLandingImage: {
    width: 150,
    alignSelf: 'center',
  },
  attributesLandingText: {
    alignSelf: 'center',
    color: '#888',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 25,
    textAlign: 'center',
  },
  attributesLandingLogo: {
    flex: 1,
    width: 80,
    height: 30,
    marginTop: 40,
    alignSelf: 'center',
  },
  authorisationBox: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 16,
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  authorisationBoxContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },
  authorisationBoxId: {
    alignSelf: 'center',
    color: 'grey',
    fontSize: 10,
    marginBottom: 16,
  },
  authorisationBoxLogo: {
    alignSelf: 'center',
    color: 'rgb(203,73,45)',
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    marginBottom: 40,
  },
  authorisationBoxTextParagraph: {
    marginBottom: 30,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  authorisationContainer: {
    backgroundColor: 'rgb(246, 246, 246)',
    flex: 1,
    justifyContent: 'space-between',
  },
  cancelSigningPetition: {
    alignSelf: 'center',
    color: '#00F',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  dateOfBirthError: {
    width: 190,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'left',
    color: '#ff0000',
    marginBottom: 30,
  },
  homeLogo: {
    height: 275,
    marginTop: 75,
    marginBottom: 50,
    width: 320,
  },
  homePassword: {
    height: Platform.OS === 'ios' ? 35 : 40,
    width: 150,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 16,
  },
  homeTextInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeWelcomeMessage: {
    fontSize: 18,
    marginBottom: 30,
  },
  link: {
    color: '#00F',
    textDecorationLine: 'underline',
  },
  missingAttribute: {
    color: '#A9A9A9',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  newAttributesAttribute: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  newAttributesAttributeName: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  newAttributesAttributeValue: {
    fontSize: 18,
    color: '#4A4A4A',
    display: 'flex',
  },
  petitionDescription: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  petitionSummaryBox: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
  },
  petitionSummaryContainer: {
    padding: 26,
    flex: 1,
  },
  petitionSummaryPetitionTitle: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
  QRScannerIntroButtonBox: {
    alignSelf: 'center',
    width: 250,
  },
  QRScannerIntroContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 75,
  },
  QRScannerIntroInstructions: {
    alignSelf: 'center',
    fontSize: 12,
    textAlign: 'center',
    width: 150,
  },
  QRScannerIntroScanner: {
    alignSelf: 'center',
    height: 100,
    marginBottom: 20,
    width: 50,
  },
  signOutcomeBox: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 16,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  signOutcomeContainer: {
    paddingVertical: 26,
    alignItems: 'center',
    flex: 1,
  },
  signOutcomeIcon: {
    alignSelf: 'center',
    height: 75,
    marginBottom: 40,
    width: 75,
  },
  signOutcomeText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  signOutcomeTextBox: {
    alignSelf: 'center',
    width: 250,
  },
  signOutcomeTextSubHeading: {
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
  pinContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pinLogo: {
    height: 80,
    width: 200,
    marginTop: 80,
    marginBottom: 30,
  },
  pinPassword: {
    height: Platform.OS === 'ios' ? 35 : 40,
    width: 190,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  pinButton: {
    marginTop: 30,
    width: 190,
    alignItems: 'center',
  },
  pinTitle: {
    width: 250,
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
  },
  pinSubtitle: {
    width: 250,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 50,
  },
  pinInputLabel: {
    width: 190,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
  },
  pinError: {
    width: 190,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'left',
    color: '#ff0000',
    marginBottom: 30,
  },
  walkthroughContainer: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 16,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  verificationInputView: {
    paddingVertical: 10,
  },
  verificationInput: {
    height: Platform.OS === 'ios' ? 35 : 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 2,
  },
});

export default styles;
