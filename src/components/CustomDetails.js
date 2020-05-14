import React  from 'react';
import {Grid} from '@material-ui/core';
import styled  from 'styled-components';

const LabelText = styled.label`
  font-size: 14px;
  color: #827f7f;
`;
const CustomDetails = ({label, value}) => {
  
  return (
    <Grid container item xs={12} sm={6} style={{marginBottom:'20px'}}>
    <Grid item xs={6}><LabelText htmlFor={label}>{label}</LabelText></Grid>
    <Grid item xs={6}>{label==='Email Opt Out'? null : <div style={{display: 'inline',  wordBreak:'break-word'}}>{value}</div>}</Grid>
    </Grid>
  )
}
export default CustomDetails;