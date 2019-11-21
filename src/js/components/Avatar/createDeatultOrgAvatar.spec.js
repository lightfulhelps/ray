import createDeatultOrgAvatar from './createDeatultOrgAvatar';

/*
a-f 
g-l
m-q
r-z
*/

describe('createDeatultOrgAvatar', () => {
  it('should return an avatar with the correct letter for a thru f', () => {
    [
      "Aaliyah's organisation",
      "Bailee's organisation",
      "Caitlin's organisation",
      "Daisy's organisation",
      "Eboni's organisation",
      "Fabiola's organisation",
    ].forEach(name => {
      const result = createDeatultOrgAvatar(name);
      expect(result).toEqual(
        expect.objectContaining({
          bgClass: 'bg-secondary',
          letter: name[0],
        })
      );
    });
  });
});
