const createDeatultOrgAvatar = orgName => {
  let bgClass;
  if (/[A-F]/.test(orgName[0])) {
    bgClass = 'bg-secondary';
  }
  return { bgClass, letter: orgName[0] };
};

export default createDeatultOrgAvatar;
