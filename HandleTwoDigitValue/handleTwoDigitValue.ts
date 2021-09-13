/**
 * Returns a min of two digits value:
 * entry value = 1   returns = 01
 * entry value = 12  returns = 12
 *
 * @param value a string or a number
 * @returns a min of two digits string number
 */

 const handleTwoDigitValue = (value: string | number): string => {
  const formatedValue = `0${value}`.slice(-2);
  return formatedValue;
};

export default handleTwoDigitValue;
