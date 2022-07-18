import constants from './constants';

function nameValidate(inputName) {
  return inputName.length >= constants.NAME_MIN_LENGTH;
}

export default nameValidate;
