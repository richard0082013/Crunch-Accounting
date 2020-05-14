import React  from 'react';
import { useField} from 'formik';
import styled from 'styled-components';

const TitleSelect = styled.select`
  width: 10% !important;
  height: 30px !important;
`
const FirstNameInput = styled.input`
  width: 65% !important;
`

const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
       { label==='First Name' ?  
          <>
            <TitleSelect>
              <option value='None'>None</option>
              <option value='Mr.'>Mr.</option>
              <option value='Ms.'>Ms.</option>
              <option value='Mrs.'>Mrs.</option>
            </TitleSelect>
            <FirstNameInput className='text-input' {...field} {...props} />
          </> : 
          <input className='text-input' {...field} {...props} />
        }
                      
      {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>): null}
    </>
  )
}
export default CustomTextInput;