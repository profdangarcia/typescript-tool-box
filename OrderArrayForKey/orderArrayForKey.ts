/**
 * This method will reorder an object array in alphabetical order based on
 * a key value. You can specify a custom order if you have a string array.
 *
 * @param dataArray object array of the given type
 * @param key object key that will be considered for the ordering
 * @param customOrder string array for ordering in a specified way
 * @returns reordered array
 */

 const orderArrayForKey = <T>(
  dataArray: T[],
  key: string,
  customOrder: string[] = []
): T[] => {
  let orderedArray = [...dataArray];
  const withCustomOrder = customOrder.length > 0;
  if (key && !withCustomOrder) {
    orderedArray = dataArray.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  }
  if (key && withCustomOrder) {
    const normalizedCustomOrder = customOrder.map(value => value.toLowerCase());
    orderedArray = dataArray.sort(
      (a, b) =>
        normalizedCustomOrder.indexOf(String(a[key]).toLowerCase().trim()) -
        normalizedCustomOrder.indexOf(String(b[key]).toLowerCase().trim())
    );
  }
  return orderedArray;
};

export default orderArrayForKey;
