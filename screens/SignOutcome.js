/* eslint-disable max-len */
import React from 'react';
import { Text, View, Linking, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImageOverlay from 'react-native-image-overlay';
import { goToAuthorization } from '../application/redux/actions/navigation';
import styles from './styles';
import Button from '../application/components/Button/Button';

const warningIcon = require('../assets/images/warning.png');
const successImage = require('../assets/images/city.png');


class SignOutcome extends React.Component {
  static route = {
    navigationBar: {
      backgroundColor: 'white',
      tintColor: 'rgb(0,163,158)',
      title: 'Outcome',
    },
  }

  static handlePress() {
    Linking.openURL('http://secure-petitions.s3-website-eu-west-1.amazonaws.com/#/results/59f888c8ce33c76884e8cf16');
  }

  constructor(props) {
    super(props);
    this.goToHome = this.goToHome.bind(this);
  }

  goToHome() {
    this.props.goToAuthorization(this.props.petitionLink);
  }

  successful() {
    console.log(this.props.signSuccess);


    return (
      <View style={styles.signOutcomeContainer}>
        <ImageOverlay
          source={successImage}
          overlayAlpha={0}
          contentPosition="bottom"
        >
          <Text
            style={{
              fontSize: 34,
              color: 'white',
              marginBottom: 30,
              marginLeft: 20,
              marginRight: 20,
              textAlign: 'center',
              backgroundColor: 'transparent',
            }}
          >
            Your vote has been recorded anonymously
          </Text>
        </ImageOverlay>


        <Image
          style={styles.signOutcomeIcon}
          source={successImage}
        />
        <Button name="Back to home2" onPress={SignOutcome.handlePress} />
      </View>
    );
  }

  error() {
    const textSubHeading = 'Sign failed for';
    const signOutcomeText = `Reason: ${this.props.petitionError} \n\nYou can return to view other petitions on the Secure Petitions website`;

    return (
      <View style={styles.signOutcomeContainer}>
        <View style={styles.signOutcomeBox}>
          <Image
            style={styles.signOutcomeIcon}
            source={warningIcon}
          />
          <View style={styles.signOutcomeTextBox}>
            <Text style={styles.signOutcomeTextSubHeading}>{textSubHeading}</Text>
            <Text style={styles.signOutcomePetitionTitle}>{this.props.petition.title}</Text>
            <Text style={styles.signOutcomeText}>{signOutcomeText}</Text>
            <Button name="Back to home" onPress={SignOutcome.handlePress} />
          </View>
        </View>
      </View>
    );
  }

  render() {
    if (!this.props.signSuccess) {
      return this.error();
    }
    return this.successful();
  }
}

SignOutcome.propTypes = {
  petitionLink: PropTypes.string.isRequired,
  goToAuthorization: PropTypes.func.isRequired,
  signSuccess: PropTypes.bool.isRequired,
  petition: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    closingDate: PropTypes.string,
  }),
  petitionError: PropTypes.string,
};

SignOutcome.defaultProps = {
  petition: undefined,
  petitionError: undefined,
};

const mapStateToProps = state => ({
  petitionLink: state.petitionLink.petitionLink,
  signSuccess: state.signOutcome.signSuccess,
  petition: state.petition.petition,
  petitionError: state.petition.error,
});

const mapDispatchToProps = dispatch => ({
  goToAuthorization: () => { dispatch(goToAuthorization()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOutcome);
