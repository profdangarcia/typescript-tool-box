import orderArrayForKey from './orderArrayForKey';
import data from './fixtures';

const {
  dataArray,
  orderedById,
  orderedByDescription,
  customOrderArray,
  reorderedWithCustomOrder,
} = data;

describe('#ToolBox - Order Array For Key', () => {
  it('should correctly order the array for selected key', () => {
    const ordered = orderArrayForKey(dataArray, 'id');
    expect(ordered).toEqual(orderedById);
  });

  it('should correctly order the array for any key', () => {
    const ordered = orderArrayForKey(dataArray, 'description');
    expect(ordered).toEqual(orderedByDescription);
  });

  it('should return the same array for no key', () => {
    const ordered = orderArrayForKey(dataArray, '');
    expect(ordered).toEqual(dataArray);
  });

  it('should correctly reorder array for a custom order', () => {
    const ordered = orderArrayForKey(dataArray, 'description', customOrderArray);
    expect(ordered).toEqual(reorderedWithCustomOrder);
  });
});
