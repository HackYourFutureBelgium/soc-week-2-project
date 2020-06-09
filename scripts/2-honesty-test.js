// fill in the blanks

console.log('--- loading: honesty test');

function honestyTestHandler() {
  'use strict';
  debugger;

  // read inputs from user
  const userString = _(`Please enter something:`);

  const confirmation = _(`Did you enter something? \nyes: "ok" \nno: "cancel"`);

  // before moving on ... type check!
  if (typeof userString !== 'string') { throw new TypeError(); }
  if (typeof confirmation !== 'boolean') { throw new TypeError(); }

  // perform core logic
  const didEnterSomething = userString ? _ : _;
  const isALiar = confirmation === didEnterSomething;
  const message = `You are a ${_ ? 'liar' : 'mensch'}!`;

  // alert result for the user
  alert(_);

  // log action for the developer
  console.log('\n--- honesty test ---');
  console.log('userString:', typeof userString, '\n', userString);
  console.log('confirmation:', typeof confirmation, '\n', confirmation);
  console.log('message:', typeof message, '\n', message);

}
