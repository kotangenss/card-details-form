export const validateDefault = (value: string): boolean | string => {
  const onlyNumbersAndSpaces = /^[0-9\s]+$/;
  return onlyNumbersAndSpaces.test(value) || 'Wrong format, numbers only';
};

export const validateText = (value: string): boolean | string => {
  const onlyLettersAndSpaces = /^[A-Za-z\s]+$/;
  const containsCyrillic = /[А-Яа-яЁё]/;

  if (value.length > 70) {
    return 'Input must be 70 characters or less';
  }
  if (containsCyrillic.test(value)) {
    return 'Only Latin letters and spaces are allowed';
  }

  return onlyLettersAndSpaces.test(value) || 'Wrong format, letters and space only';
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

export const validateCVC = (value: string): boolean | string => {
  return value.length === 3 || 'CVC must be 3 digits';
};
