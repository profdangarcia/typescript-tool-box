import parseUTCToDateHour from './parseUTCToDateHour';

describe('#ToolBox - Parse UTC to Date Hour', () => {
  it('should parse the data correctly', () => {
    const parsedData = parseUTCToDateHour('2010-03-22T14:56:30.8879164');
    expect(parsedData).toEqual('22/03/2010 14:56:30');
  });

  it('should correctly parse a short date', () => {
    const parsedData = parseUTCToDateHour('2011-03-01');
    expect(parsedData).toEqual('01/03/2011 00:00:00');
  });

  it('should return empty string', () => {
    const empty = parseUTCToDateHour('');
    expect(empty).toEqual('');
  });
});
