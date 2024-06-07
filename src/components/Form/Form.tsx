import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextInput from '../Inputs/Text/Text';
import styles from './Form.module.scss';
import CardNumber from '../Inputs/CardNumber/CardNumber';
import CustomNumbersInput from '../Inputs/CustomNumbersInput/CustomNumbersInput';

interface FormData {
  cardholderName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

const Form = (): JSX.Element => {
  const [formValues, setFormValues] = useState({
    cardholderName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const handleCardNumberChange = (cardNumber: string): void => {
    setFormValues({
      ...formValues,
      cardNumber,
    });
  };

  const handleMonthChange = (month: string): void => {
    setFormValues({
      ...formValues,
      month,
    });
  };

  const handleYearChange = (year: string): void => {
    setFormValues({
      ...formValues,
      year,
    });
  };

  const handleCVCChange = (cvc: string): void => {
    setFormValues({
      ...formValues,
      cvc,
    });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Cardholder Name"
        type="text"
        id="cardholderName"
        placeholder="Jane Appleseed"
        classNameInput={styles.input}
        hookData={register('cardholderName', {
          required: "Can't be blank",
        })}
        errorMessage={errors.cardholderName?.message as string}
        isValid={!errors.cardholderName && dirtyFields.cardholderName}
      />

      <CardNumber
        label="Card Number"
        type="text"
        name="cardNumber"
        id="cardNumber"
        placeholder="0000 0000 0000 0000"
        classNameInput={styles.input}
        hookData={register('cardNumber', {
          required: "Can't be blank",
        })}
        onChange={handleCardNumberChange}
        maxLength={19}
        errorMessage={errors.cardNumber?.message as string}
        isValid={!errors.cardNumber && dirtyFields.cardNumber}
      />

      <div>
        <CustomNumbersInput
          name="month"
          label="Exp. Date (MM)"
          placeholder="00"
          classNameInput={styles.input}
          onChange={handleMonthChange}
          maxLength={2}
          type="text"
          id="month"
          hookData={register('month', {
            required: "Can't be blank",
          })}
          errorMessage={errors.month?.message as string}
          isValid={!errors.month && dirtyFields.month}
        />
        <CustomNumbersInput
          name="year"
          label="Exp. Date (YY)"
          placeholder="00"
          classNameInput={styles.input}
          onChange={handleYearChange}
          maxLength={2}
          type="text"
          id="year"
          hookData={register('year', {
            required: "Can't be blank",
          })}
          errorMessage={errors.year?.message as string}
          isValid={!errors.year && dirtyFields.year}
        />
        <CustomNumbersInput
          name="cvc"
          label="CVC"
          placeholder="000"
          classNameInput={styles.input}
          onChange={handleCVCChange}
          maxLength={3}
          type="text"
          id="cvc"
          hookData={register('cvc', {
            required: "Can't be blank",
          })}
          errorMessage={errors.cvc?.message as string}
          isValid={!errors.cvc && dirtyFields.cvc}
        />
      </div>
      <button type="submit">Button</button>
    </form>
  );
};

export default Form;
