import parseFullDate from './parseFullDate';

describe('#ToolBox - Parse Full Date', () => {
  it('should correctly parse full date', () => {
    const formatedDate = parseFullDate('2010-03-22T14:56:30.8879164');
    expect(formatedDate).toEqual('22 de março de 2010');
  });
  it('should correctly parse short date', () => {
    const formatedDate = parseFullDate('2017-01-03');
    expect(formatedDate).toEqual('03 de janeiro de 2017');
  });
});
