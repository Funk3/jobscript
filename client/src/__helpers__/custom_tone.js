//Access the custom tone input for interpolating the API query

/**
 * Get the user input from custom tone, discard default or no choice, and return a string to be used in the API call.
 * @param {*} toneSelected from user input
 * @returns a string to be used in API call.
 */
export default function createCustomToneAPIQuery(toneSelected) {
  return !toneSelected || toneSelected === "Default" ? false : `Write the Cover Letter in a ${toneSelected} tone.`;
}
