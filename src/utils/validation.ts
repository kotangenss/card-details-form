export const validateDefault = (value: string): boolean | string => {
  const onlyNumbersAndSpaces = /^[0-9\s]+$/;
  return onlyNumbersAndSpaces.test(value) || 'Wrong format, numbers only';
};

export const validateMonth = (value: string): boolean | string => {
  const month = parseInt(value, 10);
  if (month < 1 || month > 12) {
    return 'Month must be between 01 and 12';
  }
  return true;
};

export const validateYear = (value: string): boolean | string => {
  const year = parseInt(value, 10);
  const currentYear = new Date().getFullYear() % 100;
  if (year < currentYear || year > currentYear + 10) {
    return `Year must be between ${currentYear} and ${currentYear + 10}`;
  }
  return true;
};
