console.log('tempConverter script has loaded');

// write this function!
function tempConverter(temperature, degrees) {if (temperature === 'celcius') {
  result = (degrees *9/5+32;
   
} else if (temperature === 'farenheit') {
  result = (degrees -32)*5/9;
   
} else {
  return degrees + ' is not supported';
}
  return result; 
}

// if the user wants to convert to fahrenheit
console.assert(tempConverter(53, 'fahrenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'fahrenheit') === 32, 'second');
console.assert(tempConverter(-40, 'fahrenheit') === -40, 'third');

// if the user wants to convert to celsius
console.assert(tempConverter(5, 'celsius') === -15, 'fourth');
console.assert(tempConverter(-4, 'celsius') === -20, 'fifth');
console.assert(tempConverter(12.2, 'celsius') === -11, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Fahrenheit') === 'Fahrenheit is not supported', 'ninth');


function tempConverterHandler() {
  debugger;
  // prompt the user for a noun, verb and adjective
  const userTempStr = prompt('enter a temperature to convert');
  // cast userDegreesStr to a Number, and assign the value to userDecrees
  const userDegreesStr = prompt('would you like to convert to fahrenheit or celsius?');

  console.assert(typeof userDegrees === 'number', "don't forget to cast userDegrees to a number!");

  // perform core logic
  // write this line!

  // alert result for the user
  // write this line!

  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);
