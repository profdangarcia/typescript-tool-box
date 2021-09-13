/**
 * Calculates and returns a formatted percentage value (PT-BR format)
 * If total is 0 or less it returns 0%
 * Ex: if the result is 40, returns 40%
 * if result is 32,32131 returns 32,32%
 *
 * @param total the reference value for the calc
 * @param value the value for the percentage calc
 * @returns formatted percentage value as string
 */

 const createPercentageString = (total: number, value: number): string => {
  let percentageValue = 0;
  if (total > 0) {
    percentageValue = (value * 100) / total;
  }
  const formatedValue =
    Math.round((percentageValue + Number.EPSILON) * 100) / 100;
  return `${formatedValue}%`.replace('.', ',');
};

export default createPercentageString;
