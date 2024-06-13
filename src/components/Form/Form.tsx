import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../Inputs/Text/Text';
import styles from './Form.module.scss';
import NumberInput from '../Inputs/Number/Number';
import { FormData } from './Form.interface';
import {
  validateCVC,
  validateDefault,
  validateMonth,
  validateText,
  validateYear,
} from '../../utils/validation';
import {
  setName,
  setNumber,
  setMonth,
  setYear,
  setCvc,
  setIsSubmitted,
} from '../../store/dataSlice';
import Button from '../Button/Button';
import Thanks from '../Thanks/Thanks';
import { RootState } from '../../store';

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const isSubmitted = useSelector((state: RootState) => state.dataForms.isSubmitted);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    watch,
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  watch((value) => {
    if (value.cardholderName) dispatch(setName(value.cardholderName.toUpperCase()));
    if (value.cardNumber) dispatch(setNumber(value.cardNumber));
    if (value.month) dispatch(setMonth(value.month));
    if (value.year) dispatch(setYear(value.year));
    if (value.cvc) dispatch(setCvc(value.cvc));
  });

  const onSubmit: SubmitHandler<FormData> = () => {
    dispatch(setIsSubmitted());
    reset();
  };

  return (
    <div className={styles.container}>
      {isSubmitted ? (
        <Thanks />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Cardholder Name"
            type="text"
            id="cardholderName"
            placeholder="e.g. Jane Appleseed"
            classNameInput={styles.input}
            hookData={register('cardholderName', {
              required: "Can't be blank",
              validate: validateText,
            })}
            maxLength={72}
            errorMessage={errors.cardholderName?.message as string}
            isValid={!errors.cardholderName && dirtyFields.cardholderName}
          />

          <NumberInput
            name="cardNumber"
            label="Card Number"
            type="text"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            classNameInput={styles.input}
            hookData={register('cardNumber', {
              required: "Can't be blank",
              validate: validateDefault,
            })}
            maxLength={19}
            errorMessage={errors.cardNumber?.message as string}
            isValid={!errors.cardNumber && dirtyFields.cardNumber}
          />

          <label className={styles['data-label']}>
            Exp. Date (MM/YY)
            <div className={styles.date}>
              <NumberInput
                name="month"
                label=""
                placeholder="MM"
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
              <NumberInput
                name="year"
                label=""
                placeholder="YY"
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
              <NumberInput
                name="cvc"
                label="CVC"
                placeholder="e.g. 123"
                classNameInput={styles.input}
                maxLength={3}
                type="text"
                id="cvc"
                hookData={register('cvc', {
                  required: "Can't be blank",
                  validate: {
                    validateDefault,
                    validateCVC,
                  },
                })}
                errorMessage={errors.cvc?.message as string}
                isValid={!errors.cvc && dirtyFields.cvc}
              />
            </div>
          </label>
          <Button label="Confirm" className={styles.button} disabled={!isValid} />
        </form>
      )}
    </div>
  );
};

export default Form;
