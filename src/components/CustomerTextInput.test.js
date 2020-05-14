import React from 'react';
import {shallow} from 'enzyme';
import CustomTextInput from './CustomTextInput'
import {Formik} from 'formik';

describe('test text Input ',()=>{
  const props = {
    label: 'First Name',
    name: "firstName",
    placeholder: "Enter first name",
    type: "text"
  };
  test('renders without crashing', () => {
    const wrapper = shallow(<Formik><CustomTextInput {...props}/></Formik>).dive();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders one input box with label', () => {
    const wrapper = shallow(<Formik><CustomTextInput {...props}/></Formik>).dive();
    expect(wrapper.find('[label="First Name"]').length).toBe(1);
  })
})

