export const convertFirstLetterToLowerCase = (str: string) => {
  if (!str) {
      return str;
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
};