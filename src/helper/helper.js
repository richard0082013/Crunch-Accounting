import * as Yup from 'yup';

export const initialFormValue = {
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
};

export const validationSchemaObject = {
    firstName: Yup.string().required('*Required'),
    postCode: Yup.string().min(4, "Only 4 digitals").matches(/^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/, "*Is not an Australian Postcode"),
    lastName: Yup.string().required('*Required'),
    accountName: Yup.string().required('*Required'),
    phone: Yup.string().matches(/^\D*0(\D*\d){9}\D*$/, "*Invalid phone number, 10 digitals start with 0").required('*Required'),
    email: Yup.string().email('*Invalid email address').required('*Required'),
    street: Yup.string().required('*Required'),
    city: Yup.string().required('*Required'),
    description: Yup.string().required('*Required'),
    state: Yup.string().oneOf(['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania'], '*Invalid value').required('*Required')
};