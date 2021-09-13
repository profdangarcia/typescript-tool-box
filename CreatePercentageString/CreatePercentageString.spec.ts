import createPercentageString from './createPercentageString';

describe('#ToolBox - CreatePercentageString', () => {
  it('should create the correct percentage value', () => {
    const percentString = createPercentageString(100, 50);
    expect(percentString).toEqual('50%');
  });

  it('should create percent with maximum 2 decimals', () => {
    const percentString = createPercentageString(130, 22);
    expect(percentString).toEqual('16,92%');
  });
});