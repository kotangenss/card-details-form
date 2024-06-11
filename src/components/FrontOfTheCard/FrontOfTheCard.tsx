import { useSelector } from 'react-redux';
import styles from './FrontOfTheCard.module.scss';
import { RootState } from '../../store';

const FrontOfTheCard = (): JSX.Element => {
  const number = useSelector((state: RootState) => state.dataForms.number);
  const name = useSelector((state: RootState) => state.dataForms.name);
  const month = useSelector((state: RootState) => state.dataForms.month);
  const year = useSelector((state: RootState) => state.dataForms.year);

  return (
    <div className={styles.front}>
      <p className={styles.number}>{number}</p>
      <div className={styles['row-bottom']}>
        <p>{name}</p>
        <p>
          {month}/{year}
        </p>
      </div>
    </div>
  );
};

export default FrontOfTheCard;
