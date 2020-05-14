import React from 'react';
import { Styles } from './Style';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@material-ui/core';
import CustomTextInput from './components/CustomTextInput'
import CustomCheckbox from './components/CustomCheckbox';
import CustomSelect from './components/CustomSelect';
import CustomTextAreaInput from './components/CustomTextAreaInput';
import SaveModal from './components/SaveModal';

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
        initialValues={{
          title: '',
          firstName: '',
          lastName: '',
          accountName: '',
          companyName: '',
          phone: '',
          fax: '',
          jobTitle: '',
          email: '',
          emailOptOut: false,
          street: '',
          city: '',
          state: '',
          postCode: '',
          description: '',
        }}
        validationSchema={Yup.object({
          // firstName,
          // postCode,
          lastName: Yup.string().required('*Required'),
          accountName: Yup.string().required('*Required'),
          phone: Yup.number().required('*Required'),
          email: Yup.string().email('*Invalid email address').required('*Required'),
          street: Yup.string().required('*Required'),
          city: Yup.string().required('*Required'),
          description: Yup.string().required('*Required'),
          state: Yup.string().oneOf(['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania'], '*Invalid value').required('*Required')
        })}
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
            <Form>
              <img style={{margin: 'auto'}} src='/crunchAccounting.png' alt="aaa" />
              <Grid container
                style={{ background: 'darkblue', width: '100%', height: '40px', padding: '0 16px' }}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid container item
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  xs={6}
                >
                  <div style={{ color: 'white' }}>Create Contact</div>
                </Grid>
                <Grid container item xs={6}
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                <button className='buttonCancel' type="reset">Cancel</button>
                  <button className='buttonSave' type="submit">{props.isSubmitting ? 'Loading...' : 'Save'}</button>
                  
                </Grid>
              </Grid>

              <Grid container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                style={{ width: '80%', padding: '32px' }}
              >
                <Grid
                  container
                  item
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    container
                    item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <h1>Contact information</h1>
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='First Name' name='firstName' type='text' placeholder='Enter first name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Last Name' name='lastName' type='text' placeholder='Enter last name' />
                    </Grid>
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Account Name' name='accountName' type='text' placeholder='Enter account name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Company Name (optional)' name='companyName' type='text' placeholder='Enter company name' />
                    </Grid>
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Phone' name='phone' type='text' placeholder='Enter phone number' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Fax (optional)' name='fax' type='text' placeholder='Enter fax number' />
                    </Grid>
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Title (optional)' name='jobTitle' type='text' placeholder='Enter job title' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Email' name='email' type='text' placeholder='Enter email address' />
                    </Grid>
                  </Grid>
                  <Grid container item direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomCheckbox name='emailOptOut'>Email Opt Out</CustomCheckbox>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <h1>Address Information</h1>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label="Street No. & Street" name='street' type='text' placeholder='Enter street name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='City' name='city' type='text' placeholder='Enter city' />
                    </Grid>
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomTextInput label='Postcode' name='postCode' type='text' placeholder='Enter postcode' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CustomSelect label='State' name='state'>
                        <option value=''>Select state</option>
                        <option value='New South Wales'>New South Wales</option>
                        <option value='Victoria'>Victoria</option>
                        <option value='Queensland'>Queensland</option>
                        <option value='Western Australia'>Western Australia</option>
                        <option value='South Australia'>South Australia</option>
                        <option value='Tasmania'>Tasmania</option>
                      </CustomSelect>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <h1>Description Information</h1>
                  <Grid container item direction="row"
                    justify="flex-start"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                      <CustomTextAreaInput label='Description' name='description' placeholder='Enter description' />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
            <SaveModal isModalShown={open} onClose={handleClose} formValue={props.values}/>
          </>
        )}
      </Formik>
    </Styles>
  );
}

export default App;
