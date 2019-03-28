
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

const types = {
  PETITION_REQUESTED: 'PETITION_REQUESTED',
  SET_PETITION: 'SET_PETITION',
  SET_PETITION_ERROR: 'SET_PETITION_ERROR',
  SET_PETITION_LINK: 'SET_PETITION_LINK',
  SET_DECIDIM_INFO: 'SET_DECIDIM_INFO',
  SET_WALLET_ID: 'SET_WALLET_ID',
  ADD_CREDENTIAL: 'ADD_CREDENTIAL',
  STORE_ATTRIBUTES: 'STORE_ATTRIBUTES',
  LOAD_ATTRIBUTES: 'LOAD_ATTRIBUTES',
  TOGGLE_REQUIRED_ATTRIBUTE: 'TOGGLE_REQUIRED_ATTRIBUTE',
  TOGGLE_OPTIONAL_ATTRIBUTE: 'TOGGLE_OPTIONAL_ATTRIBUTE',
  TOGGLE_ENABLE_ATTRIBUTE: 'TOGGLE_ENABLE_ATTRIBUTE',
  SIGN_PETITION: 'SIGN_PETITION',
  SIGN_PETITION_ERROR: 'SIGN_PETITION_ERROR',
  SIGN_OUTCOME: 'SIGN_OUTCOME',
  AUTHORIZATION_ACTION: 'AUTHORIZATION_ACTION',
  UPDATE_PIN_ACTION: 'UPDATE_PIN_ACTION',
  RESET_PIN_ACTION: 'RESET_PIN_ACTION',
  PIN_SETUP_TEXT1_CHANGED: 'PIN_SETUP_TEXT1_CHANGED',
  PIN_SETUP_TEXT2_CHANGED: 'PIN_SETUP_TEXT2_CHANGED',
  PIN_SETUP_VALIDATE: 'PIN_SETUP_VALIDATE',
  RESET_PIN_SETUP: 'RESET_PIN_SETUP',
  ADD_OPTIONAL_ATTRIBUTE: 'ADD_OPTIONAL_ATTRIBUTE',
  SAVE_ATTRIBUTES: 'SAVE_ATTRIBUTES',
  SAVE_ATTRIBUTES_ERROR: 'SAVE_ATTRIBUTES_ERROR',
  RESET_ATTRIBUTES_ERRORS: 'RESET_ATTRIBUTES_ERRORS',
  COMING_FROM_LOGIN: 'COMING_FROM_LOGIN',
  NOT_COMING_FROM_LOGIN: 'NOT_COMING_FROM_LOGIN',
  LOGIN_REQUESTED: 'LOGIN_REQUESTED',
  LOGIN_RESET: 'LOGIN_RESET',
  LOGIN_SUCCEEDED: 'LOGIN_SUCCEEDED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  UPDATE_VERIFICATION_INPUT: 'UPDATE_VERIFICATION_INPUT',
  UPDATE_KEYS: 'UPDATE_KEYS',
};

export default types;
