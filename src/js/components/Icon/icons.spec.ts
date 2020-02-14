import icons from "./icons";

describe('icons', () => {
  it('should match the snapshot', () => {
    expect(icons).toMatchSnapshot();
  });
});