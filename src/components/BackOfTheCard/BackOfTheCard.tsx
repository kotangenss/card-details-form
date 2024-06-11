import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './BackOfTheCard.module.scss';

const BackOfTheCard = (): JSX.Element => {
  const cvc = useSelector((state: RootState) => state.dataForms.cvc);

  return (
    <div className={styles.back}>
      <p className={styles.cvc}>{cvc}</p>
    </div>
  );
};

export default BackOfTheCard;
