import fixStringEncode from './fixStringEncode';

describe('#ToolBox - Fix String Encode', () => {
  it('should correctly fix encoded string', () => {
    const fixedString = fixStringEncode('Aguardando ConferÃªncia');
    expect(fixedString).toEqual('Aguardando Conferência');
  });

  it('should return the same string for no encoded one', () => {
    const fixedString = fixStringEncode('Frequência');
    expect(fixedString).toEqual('Frequência');
  });
});
