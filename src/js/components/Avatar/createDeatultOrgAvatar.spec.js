import createDeatultOrgAvatar from './createDeatultOrgAvatar';

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
  it('should return an avatar with the correct letter for g thru l', () => {
    [
      "Gabriel's organisation",
      "Hailee's organisation",
      "Iesha's organisation",
      "Jacquelyn's organisation",
      "Kyra's organisation",
      "Leticia's organisation",
    ].forEach(name => {
      const result = createDeatultOrgAvatar(name);
      expect(result).toEqual(
        expect.objectContaining({
          bgClass: 'bg-primary',
          letter: name[0],
        })
      );
    });
  });
  it('should return an avatar with the correct letter for m thru r', () => {
    [
      "Marcella's organisation",
      "Nikita's organisation",
      "Octavia's organisation",
      "Payton's organisation",
      "Quinton's organisation",
      "Rigoberto's organisation",
    ].forEach(name => {
      const result = createDeatultOrgAvatar(name);
      expect(result).toEqual(
        expect.objectContaining({
          bgClass: 'bg-danger',
          letter: name[0],
        })
      );
    });
  });
  it('should return an avatar with the correct letter for s thru z', () => {
    [
      "Shanice's organisation",
      "Thalia's organisation",
      "Ulysses's organisation",
      "Valeria's organisation",
      "Whitley's organisation",
      "Xiomara's organisation",
      "Yessenia's organisation",
      "Zachariah's organisation",
    ].forEach(name => {
      const result = createDeatultOrgAvatar(name);
      expect(result).toEqual(
        expect.objectContaining({
          bgClass: 'bg-warning',
          letter: name[0],
        })
      );
    });
  });
});
