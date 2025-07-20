'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};
  const styles = sourceString.trim().split(';'); // make array with elements

  // made a loop for for elements of array(styles)
  for (const element of styles) {
    const styleValue = element.split(':');
    // for every element made a array with
    // first element - name of style and others elements - values of this styles
    const [style, ...values] = styleValue;

    // add to object style and values without spaces
    // at the end & start, and with spaces between values
    object[style.trim()] = values.join(' ').trim();

    // if key is empty - delete this key from object
    if (!style) {
      delete object[style];
    }
  }

  return object;
}

module.exports = convertToObject;
