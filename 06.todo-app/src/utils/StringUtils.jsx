const isNullOrEmpty = (value) => {
  if (value == null || value.trim().length == 0) {
    return true;
  }
  return false;
};

const xutils = new StringUtils();

export default xutils;
