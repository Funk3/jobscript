//Access the custom length input for interpolating the API query 

/**
 * Get the user input from custom length, discard default or no choice, and return a string to be used in the API call.
 * @param {*} lengthSelected from state
 * @returns a string to be used in API call.
 */
const createCustomLengthAPIQuery = (lengthSelected) => {
  //might not need falsy check at all??
  !lengthSelected || lengthSelected === "Default" ? false :`The Cover Letter length should be ${lengthSelected}.`
}

