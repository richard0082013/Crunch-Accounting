import React from 'react';
import {shallow} from 'enzyme';
import CustomCheckbox from './CustomCheckbox'
import {Formik} from 'formik';

describe('test checkboxt ',()=>{
  const props = {
    children: "Email Opt Out",
    name: "emailOptOut"
  };
  test('renders without crashing', () => {
    const wrapper = shallow(<Formik><CustomCheckbox {...props}/></Formik>).dive();
    expect(wrapper).toMatchSnapshot();
  });
  test('renders one checkbox with children', () => {
    const wrapper = shallow(<Formik><CustomCheckbox {...props}/></Formik>).dive();
    expect(wrapper.props().children).toBe(props.children);
  })
})

