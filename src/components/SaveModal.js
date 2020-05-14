import React from 'react';
import { Backdrop, Modal, Grid} from '@material-ui/core';
import { Close, Check } from '@material-ui/icons';
import styled from 'styled-components'

const OutterWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const SaveModal = ({ isModalShown, onClose, formValue}) =>{ 
console.log("SaveModal -> formValue", formValue)
  return (
  <Modal
    open={isModalShown}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
  >
    <OutterWrapper>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        style={{ padding: '32px' }}
      >
        <Grid item><Close onClick={onClose} /></Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        style={{ padding: '32px' }}
      >
        <Grid item><h3>Saved</h3><Check style={{ display: 'inline-block', color: 'green' }} /><p>The contact details has been saved</p></Grid>
      </Grid>
      <Grid container direction="row"
        justify="center"
        alignItems="center"
        style={{ padding: '32px' }} >
        <Grid container item  direction="row"
        justify="flex-start"
        alignItems="center"><Grid item><h3>Contact Information</h3></Grid></Grid>
        <Grid container item direction="row"
          justify="flex-start"
          alignItems="center" 
          xs={12} sm={6}>
            <Grid container item direction="row"
            justify="flex-end"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingRight:'24px'}}>First Name:</Grid>
            </Grid>
            <Grid container item direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingLeft:'24px'}}>{formValue.firstName}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6} >
            <Grid container item direction="row" justify="flex-end" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingRight:'24px'}}>Last Name:</Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingLeft:'24px'}}>{formValue.lastName}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row"
          justify="flex-start"
          alignItems="center" 
          xs={12} sm={6}>
            <Grid container item direction="row"
            justify="flex-end"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingRight:'24px'}}>Account Name:</Grid>
            </Grid>
            <Grid container item direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingLeft:'24px'}}>{formValue.accountName}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6} >
            <Grid container item direction="row" justify="flex-end" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingRight:'24px'}}>Company Name:</Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingLeft:'24px'}}>{formValue.companyName}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row"
          justify="flex-start"
          alignItems="center" 
          xs={12} sm={6}>
            <Grid container item direction="row"
            justify="flex-end"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingRight:'24px'}}>Phone:</Grid>
            </Grid>
            <Grid container item direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingLeft:'24px'}}>{formValue.phone}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6} >
            <Grid container item direction="row" justify="flex-end" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingRight:'24px'}}>Fax:</Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingLeft:'24px'}}>{formValue.fax}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row"
          justify="flex-start"
          alignItems="center" 
          xs={12} sm={6}>
            <Grid container item direction="row"
            justify="flex-end"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingRight:'24px'}}>Title:</Grid>
            </Grid>
            <Grid container item direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={6}>
            <Grid item style={{paddingLeft:'24px'}}>{formValue.jobTitle}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6} >
            <Grid container item direction="row" justify="flex-end" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingRight:'24px'}}>Email:</Grid>
            </Grid>
            <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6}>
              <Grid item style={{paddingLeft:'24px'}}>{formValue.email}</Grid>
            </Grid>
        </Grid>
        <Grid container item direction="row"
          justify="flex-start"
          alignItems="center" 
          xs={12} sm={6}>
            <Grid container item direction="row"
            justify="flex-end"
            alignItems="center" xs={12} sm={6}>
            {formValue.emailOptOut && <Grid item style={{paddingRight:'24px'}}>Email Opt Out</Grid>}
            </Grid>
            <Grid container item direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={6} />  
        </Grid>
        <Grid container item direction="row" justify="flex-start" alignItems="center" xs={12} sm={6} />
      </Grid>



      <Grid container direction="row"
        justify="flex-start"
        alignItems="center"
        style={{ padding: '32px' }} >
        <Grid container item  direction="row"
        justify="flex-start"
        alignItems="center"><Grid item><h3>Description Information</h3></Grid></Grid>
        <Grid container item direction="row"
          justify="flex-start"
          alignItems="center" 
          xs={12} sm={12}>
            <Grid container item direction="row"
            justify="flex-end"
            alignItems="center" xs={12} sm={3}>
            <Grid item style={{paddingRight:'24px'}}>Description</Grid>
            </Grid>
            <Grid container item direction="row"
            justify="flex-start"
            alignItems="center" xs={12} sm={9}>
            <Grid item style={{paddingLeft:'24px'}}>{formValue.description}</Grid>
            </Grid>
        </Grid>
      </Grid>
    </OutterWrapper>
  </Modal>
)}

export default SaveModal;