import pinSetupReducer from '../../../../../application/redux/reducers/pinSetup';
import types from '../../../../../application/redux/actionTypes';

describe('PinSetup screen', () => {
  const initialState = {
    pin1: '',
    pin2: '',
    validated: false,
  };

  it('should have initial state', () => {
    expect(pinSetupReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle PIN_SETUP_TEXT1_CHANGED action with reducer', () => {
    const state = pinSetupReducer(initialState, {
      type: types.PIN_SETUP_TEXT1_CHANGED,
      pin: '1234',
    });

    expect(state.pin1).toEqual('1234');
  });

  it('should handle PIN_SETUP_TEXT2_CHANGED action with reducer', () => {
    const state = pinSetupReducer(initialState, {
      type: types.PIN_SETUP_TEXT2_CHANGED,
      pin: '5678',
    });

    expect(state.pin2).toEqual('5678');
  });

  it('should validate to true if pin1 and pin2 has same value', () => {
    const stateWithOnePin = {
      pin1: '1234',
      pin2: '',
      validated: false,
    };

    const actualState = pinSetupReducer(stateWithOnePin, {
      type: types.PIN_SETUP_TEXT2_CHANGED,
      pin: '1234',
    });

    expect(actualState.validated).toBe(true);
  });

  it('should validate to false if pin1 is different than pin2', () => {
    const stateWithOnePin = {
      pin1: '1234',
      pin2: '',
      validated: false,
    };

    const actualState = pinSetupReducer(stateWithOnePin, {
      type: types.PIN_SETUP_TEXT2_CHANGED,
      pin: '2468',
    });

    expect(actualState.validated).toBe(false);
  });

  it('should validate that the pin is at least 4 digits long', () => {
    const stateWithOnePin = {
      pin1: '12',
      pin2: '',
      validated: false,
    };

    const actualState = pinSetupReducer(stateWithOnePin, {
      type: types.PIN_SETUP_TEXT2_CHANGED,
      pin: '12',
    });

    expect(actualState.validated).toBe(false);
  });

  it('should validate to false if the pin is not all numbers', () => {
    const stateWithOnePin = {
      pin1: '123a',
      pin2: '',
      validated: false,
    };

    const actualState = pinSetupReducer(stateWithOnePin, {
      type: types.PIN_SETUP_TEXT2_CHANGED,
      pin: '123a',
    });

    expect(actualState.validated).toBe(false);
  });

  it('should validate to false if the pin is not all numbers', () => {
    const stateWithOnePin = {
      pin1: '111.2',
      pin2: '',
      validated: false,
    };

    const actualState = pinSetupReducer(stateWithOnePin, {
      type: types.PIN_SETUP_TEXT2_CHANGED,
      pin: '111.2',
    });

    expect(actualState.validated).toBe(false);
  });
});
