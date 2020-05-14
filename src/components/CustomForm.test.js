import React from 'react';
import {shallow} from 'enzyme';
import CustomForm from './CustomForm'
import {Formik} from 'formik';

describe('test text Input ',()=>{
  const props = {
   isSubmmiting: false
  };
  test('renders without crashing', () => {
    const wrapper = shallow(<Formik><CustomForm {...props}/></Formik>).dive();
    expect(wrapper).toMatchSnapshot();
  });
})

