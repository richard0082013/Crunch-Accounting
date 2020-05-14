import React from 'react';
import {shallow} from 'enzyme';
import SaveModal from './SaveModal'
import {Formik} from 'formik';

describe('test text Input ',()=>{
  const props = {
    isModalShown: true, 
    onClose: jest.fn(), 
    formValue: {
      firstName: 'aaa'
    }
  };
  test('renders without crashing', () => {
    const wrapper = shallow(<Formik><SaveModal {...props}/></Formik>).dive();
    expect(wrapper).toMatchSnapshot();
  });
  test('click close button', () => {
    const wrapper = shallow(<Formik><SaveModal {...props}/></Formik>).dive();
    wrapper.props().onClose();
    expect(wrapper).toMatchSnapshot();
  });
})

