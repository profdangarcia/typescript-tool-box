/**
 * Given an array with objects, it will perform a filter based on an array of 
 * keys to be considered and a specific search term
 *
 * @param data an array with the specified type
 * @param term the search term
 * @param keys object keys where the term will be searched
 * @returns the filtered array
 */

 function filterArrayByTermAndKeys<ArrayType>(
  data: Array<ArrayType>,
  term: string,
  keys: string[]
): Array<ArrayType> {
  let filtered = [...data];
  if (term) {
    filtered = data.filter(item => {
      const regexp = new RegExp(term, 'i');
      let isMatch = false;
      keys.forEach(filterType => {
        if (regexp.test(item[filterType])) {
          isMatch = true;
        }
      });
      return isMatch;
    });
  }
  return filtered;
}

export default filterArrayByTermAndKeys;
