import filterArrayByTermAndKeys from './filterArrayByTermAndKeys';
import data from './fixtures';

const { dataArray, filteredById1, filteredByIdAndName2, filteredByMila } = data;

describe('#ToolBox - Filter Array by Term and Keys', () => {
  it('should return the same array if no term provided', () => {
    const filtered = filterArrayByTermAndKeys(dataArray, '', ['id']);
    expect(filtered).toEqual(dataArray);
  });
  it('should return correct filtered by id', () => {
    const filtered = filterArrayByTermAndKeys(dataArray, '1', ['id']);
    expect(filtered).toEqual(filteredById1);
  });
  it('should return correct filtered by id or name', () => {
    const filtered = filterArrayByTermAndKeys(dataArray, '2', ['id', 'name']);
    expect(filtered).toEqual(filteredByIdAndName2);
  });
  it('should return correct filtered by description', () => {
    const filtered = filterArrayByTermAndKeys(dataArray, 'mila', ['description']);
    expect(filtered).toEqual(filteredByMila);
  });
});
