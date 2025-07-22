'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  // made array with elements, and filter empty elements
  const styles = sourceString
    .split(';')
    .filter((item) => (typeof item === 'string' ? item.trim() !== '' : true));

  // made a loop for for elements of array(styles)
  for (const element of styles) {
    const styleValue = element.split(':');
    // for every element made a array with
    // first element - name of style and others elements - values of this styles
    const [style, ...values] = styleValue;

    object[style.trim()] = values.join(' ').trim();

    // add to object style and values without spaces
    // at the end & start, and with spaces between values
  }

  return object;
}

const complexStylesString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`;

console.log(convertToObject(complexStylesString));

module.exports = convertToObject;
