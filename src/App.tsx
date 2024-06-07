import { FormProvider, useForm } from 'react-hook-form';
import './App.css';
import Form from './components/Form/Form';

const App = (): JSX.Element => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form />
    </FormProvider>
  );
};

export default App;
