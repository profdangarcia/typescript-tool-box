import isCompleteDate from './isCompleteDate';

describe('#ToolBox - Is Complete Date?', () => {
  it('should correctly check a complete date', () => {
    const isComplete = isCompleteDate('2010-03-22T14:56:30.8879164');
    expect(isComplete).toEqual(true);
  });

  it('should correctly an short date', () => {
    const isComplete = isCompleteDate('2010-03-22');
    expect(isComplete).toEqual(false);
  });

  it('should return false for no date', () => {
    const isComplete = isCompleteDate('');
    expect(isComplete).toEqual(false);
  });
});
