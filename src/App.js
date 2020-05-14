import React from 'react';
import { Styles } from './Style';
import { Formik} from 'formik';
import * as Yup from 'yup';
import SaveModal from './components/SaveModal';
import CustomForm from './components/CustomForm';
import {initialFormValue, validationSchemaObject} from './helper/helper'

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Styles>
      <Formik
        initialValues={initialFormValue}
        validationSchema={Yup.object(validationSchemaObject)}
        onSubmit={( values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            handleOpen();
          }, 3000)
        }
        }
      >
        {props => (
          <>
            <CustomForm isSubmitting={props.isSubmitting} />
            <SaveModal isModalShown={open} onClose={handleClose} formValue={props.values}/>
          </>
        )}
      </Formik>
    </Styles>
  );
}

export default App;
