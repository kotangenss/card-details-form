import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import TextInput from '../Inputs/Text/Text';
import styles from './Form.module.scss';
import CardNumber from '../Inputs/Number/Number';
import { FormData } from './Form.interface';
import { validateDefault, validateMonth, validateYear } from '../../utils/validation';
import { setName, setNumber, setMonth, setYear, setCvc } from '../../store/dataSlice';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    watch,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  watch((value) => {
    if (value.cardholderName) dispatch(setName(value.cardholderName));
    if (value.cardNumber) dispatch(setNumber(value.cardNumber));
    if (value.month) dispatch(setMonth(value.month));
    if (value.year) dispatch(setYear(value.year));
    if (value.cvc) dispatch(setCvc(value.cvc));
  });

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
        name="cardNumber"
        label="Card Number"
        type="text"
        id="cardNumber"
        placeholder="0000 0000 0000 0000"
        classNameInput={styles.input}
        hookData={register('cardNumber', {
          required: "Can't be blank",
          validate: validateDefault,
        })}
        maxLength={19}
        errorMessage={errors.cardNumber?.message as string}
        isValid={!errors.cardNumber && dirtyFields.cardNumber}
      />

      <div>
        <CardNumber
          name="month"
          label="Exp. Date (MM)"
          placeholder="00"
          classNameInput={styles.input}
          maxLength={2}
          type="text"
          id="month"
          hookData={register('month', {
            required: "Can't be blank",
            validate: {
              validateDefault,
              validateMonth,
            },
          })}
          errorMessage={errors.month?.message as string}
          isValid={!errors.month && dirtyFields.month}
        />
        <CardNumber
          name="year"
          label="Exp. Date (YY)"
          placeholder="00"
          classNameInput={styles.input}
          maxLength={2}
          type="text"
          id="year"
          hookData={register('year', {
            required: "Can't be blank",
            validate: {
              validateDefault,
              validateYear,
            },
          })}
          errorMessage={errors.year?.message as string}
          isValid={!errors.year && dirtyFields.year}
        />
        <CardNumber
          name="cvc"
          label="CVC"
          placeholder="000"
          classNameInput={styles.input}
          maxLength={3}
          type="text"
          id="cvc"
          hookData={register('cvc', {
            required: "Can't be blank",
            validate: validateDefault,
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
