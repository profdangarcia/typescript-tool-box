/**
 * This method tries to decode a string to UTF-8
 * if it fails returns the same entry string.
 *
 * @param text string to fix encode
 * @returns the same string or the fixed encoded string
 */

 const fixStringEncode = (text: string): string => {
  let parsedString = '';
  try {
    parsedString = decodeURIComponent(escape(text));
  } catch (error) {
    parsedString = text;
  }
  return parsedString;
};

export default fixStringEncode;
