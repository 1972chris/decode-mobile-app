import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking, Image} from 'react-native';
import PropTypes from 'prop-types';
import Router from '../Router';

const tick = require('../assets/images/decode_tick.jpg');


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgb(246, 246, 246)',
    flex: 1,
  },
  buttonBox: {
    width: 250,
    alignSelf: 'center',
  },
  confirmationBox: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    margin: 16,
    marginTop: 30,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
  },
  textParagraph: {
    fontSize: 14,
    marginBottom: 15,
    textAlign: 'center',
  },
  PetitionSummary: {
    backgroundColor: '#EEE',
    width: 300,
  },
  textSubHeading: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'rgb(0,163,158)',
    borderRadius: 2,
    elevation: 2,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    marginBottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.54)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 250,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'center',
  },
  tick: {
    height: 75,
    width: 75,
    alignSelf: 'center',
    marginBottom: 40,
  },
});

export default class SignConfirmation extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: 'white',
      tintColor: 'rgb(0,163,158)',
      title: 'Confirmation',
    },
  }

  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
  }

  goToHome() {
    this.props.navigator.push(Router.getRoute('authorisation'));
  }

  handlePress() {
    Linking.openURL('http://localhost:8080/#/59f888c8ce33c76884e8cf16');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.confirmationBox}>
          <Image
            style={styles.tick}
            source={tick}
          />
          <View style={styles.buttonBox}>
            <Text style={styles.textSubHeading}>Thank you for signing</Text>
            <Text style={styles.textHeading}>Create communal space in Atlantis</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handlePress}>
              <Text style={styles.buttonText}>RETURN TO SECURE PETITIONS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
SignConfirmation.propTypes = {
  navigator: PropTypes.shape({push: PropTypes.func.isRequired}),
};

SignConfirmation.defaultProps = {
  navigator: '',
};
