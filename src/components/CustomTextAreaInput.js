import React  from 'react';
import { useField} from 'formik';

const CustomTextAreaInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <textarea className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>): null}
    </>
  )
}
export default CustomTextAreaInput;