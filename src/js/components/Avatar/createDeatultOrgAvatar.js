const createDeatultOrgAvatar = orgName => {
  const letter = orgName[0];
  let bgClass;
  if (/[A-F]/.test(letter)) {
    bgClass = 'bg-secondary';
  }
  if (/[G-L]/.test(letter)) {
    bgClass = 'bg-primary';
  }
  if (/[M-R]/.test(letter)) {
    bgClass = 'bg-danger';
  }
  if (/[M-R]/.test(letter)) {
    bgClass = 'bg-danger';
  }
  if (/[S-Z]/.test(letter)) {
    bgClass = 'bg-warning';
  }
  return { bgClass, letter };
};

export default createDeatultOrgAvatar;
