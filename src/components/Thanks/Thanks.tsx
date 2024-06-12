import { useDispatch } from 'react-redux';
import complete from '../../assets/images/icon-complete.svg';
import Button from '../Button/Button';
import styles from './Thanks.module.scss';
import { resetCardDetails, setIsSubmitted } from '../../store/dataSlice';

const Thanks = (): JSX.Element => {
  const dispatch = useDispatch();

  const onClick = (): void => {
    dispatch(setIsSubmitted());
    dispatch(resetCardDetails());
  };

  return (
    <div className={styles.container}>
      <img src={complete} alt="complete" />
      <h2>Thank You!</h2>
      <p>We&apos;ve added your card details</p>
      <Button label="Continue" className={styles.button} onClick={onClick} />
    </div>
  );
};

export default Thanks;
