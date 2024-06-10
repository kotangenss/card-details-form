export const validateCardNumber = (value: string): boolean | string => {
  const onlyNumbersAndSpaces = /^[0-9\s]+$/;
  return onlyNumbersAndSpaces.test(value) || 'Wrong format, numbers only';
};
