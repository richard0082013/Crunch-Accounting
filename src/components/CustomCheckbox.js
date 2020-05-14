import React  from 'react';
import { useField} from 'formik';

const CustomChecbox = ({children, ...props}) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <div style={{display: 'flex'}}>
        <label  className='checkbox'>
      {children}
      </label>
    <input className='checkboxInput' type='checkbox' {...field} {...props} />
  
      {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>): null}
    </div>
  )
}
export default CustomChecbox;