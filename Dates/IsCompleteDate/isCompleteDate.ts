/**
 * Checks if the date string is in the long format (2018-06-02T14:56:30.8879164)
 * or short format (2018-06-02)
 *
 * @param date a UTC date string
 * @returns 'true' for long format and 'false' for short format
 */

 const isCompleteDate = (date: string): boolean => {
  let isComplete = false;
  if (date) {
    isComplete = date.length > 10;
  }
  return isComplete;
};

export default isCompleteDate;
