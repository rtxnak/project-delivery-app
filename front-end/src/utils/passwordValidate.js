import constants from './constants';

function passwordValidate(inputPass) {
  return inputPass.length > constants.MIN_NUMBER_CARAC;
}

export default passwordValidate;
