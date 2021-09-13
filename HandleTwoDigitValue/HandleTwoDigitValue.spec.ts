import handleTwoDigitValue from './handleTwoDigitValue';

describe('#ToolBox - Handle Two Digit Value', () => {
  it('should correctly parse a 1 digit value', () => {
    const parsedValue = handleTwoDigitValue('1');
    expect(parsedValue).toEqual('01');
  });

  it('should correctly parse a 2 digit value', () => {
    const parsedValue = handleTwoDigitValue('12');
    expect(parsedValue).toEqual('12');
  });
});
