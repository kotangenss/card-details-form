import { FormProvider, useForm } from 'react-hook-form';

import Form from '../Form/Form';
import FrontOfTheCard from '../FrontOfTheCard/FrontOfTheCard';
import styles from './CardPage.module.scss';
import BackOfTheCard from '../BackOfTheCard/BackOfTheCard';

const CardPage = (): JSX.Element => {
  const methods = useForm();

  return (
    <div className={styles.container}>
      <div className={styles['card-display']}>
        <FrontOfTheCard />
        <BackOfTheCard />
      </div>
      <FormProvider {...methods}>
        <Form />
      </FormProvider>
    </div>
  );
};

export default CardPage;
