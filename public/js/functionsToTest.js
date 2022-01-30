/**
 * @function  {} returnAnObject
 * @param  {string} letresponse
 * @param  {string} letindex
 */

const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach(arg => {
      response[index] = arg;
      index++;
    })
  } else {
    response = 'No argument was given to the function.';
  }
  return response;
};

/**
 * @function multiplyAllByTwo
 * @param  {} =>{letresponse;if(arrayOfNumbers.constructor.prototype===newArray([]
 * @param  {} .constructor.prototype
 * @param  {} {response=arrayOfNumbers.map((val=>val*2
 * @param  {'} ;console.log('arrayTimesTwo
 * @param  {} arrayTimesTwo
 */

const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (arrayOfNumbers.constructor.prototype === new Array([]).constructor.prototype) {
    response = arrayOfNumbers.map((val => val * 2));
    console.log('arrayTimesTwo: ', arrayTimesTwo);
  } else {
    response = 'The argument is not an Array of numbers';
  }
  return response;
};
