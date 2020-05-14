import React from 'react';
import { Backdrop, Modal, Grid} from '@material-ui/core';
import { Close, Check } from '@material-ui/icons';
import styled from 'styled-components';
import CustomDetails from './CustomDetails'

const OutterWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const ContentWrapper = styled.div`
  padding: 32px;
`;

const SavedText = styled.span`
  font-size: 32px;
  margin-right: 10px;
`;
const DetailText = styled.p`
  font-size: 14px;
  color: #827f7f;
`;
const Heading = styled.h1`
    text-align: left;
    color: #e0904a;
    font-size: 24px;
`

const SaveModal = ({ isModalShown, onClose, formValue}) =>{ 
  return (
  <Modal
    open={isModalShown}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
  >

    <OutterWrapper>
      <ContentWrapper>
        {/* close button */}
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Grid item><Close onClick={onClose} /></Grid>
      </Grid> 
      {/* saved content */}
      <Grid container>
      <Grid item xs={12}>
          <SavedText>Saved</SavedText><span><Check style={{ color: 'green' }} /></span>
        </Grid>
      <Grid item xs={12}>
          <DetailText>The contact details have been saved</DetailText>
        </Grid>
      </Grid>
      {/* contact detail */}
      <Grid
                  container
                  item
                  direction="column"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid
                    container
                    item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Heading>Contact information</Heading>
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">                   
                      <CustomDetails label='First Name' value={formValue.firstName}/>                    
                    <CustomDetails label='Last Name' value={formValue.lastName}/>                  
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">                    
                    <CustomDetails label='Account Name' value={formValue.accountName}/>                                     
                    <CustomDetails label='Company Name' value={formValue.companyName || 'N/A'}/>                  
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">                   
                    <CustomDetails label='Phone' value={formValue.phone}/>
                    <CustomDetails label='Fax' value={formValue.fax || 'N/A'}/>     
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">                   
                    <CustomDetails label='Title' value={formValue.jobTitle || 'N/A'}/>                   
                    <CustomDetails label='Email' value={formValue.email}/>                 
                  </Grid>
                  {formValue.emailOptOut&&<Grid container item direction="row"
                    justify="flex-start"
                    alignItems="center">                   
                      <CustomDetails label='Email Opt Out' value={formValue.emailOptOut}/>                   
                  </Grid>}
                </Grid>
                {/* address details */}
                <Grid
                  container
                  item
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    container
                    item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Heading>Address information</Heading>
                  </Grid>
                  <Grid container item direction="row"
                    justify="flex-start"
                    alignItems="center">                    
                      <CustomDetails label="Street No. & Street" value={formValue.street}/>                 
                    <CustomDetails label='City' value={formValue.city}/>                  
                  </Grid>
                  <Grid container item direction="row"
                    justify="center"
                    alignItems="center">                  
                    <CustomDetails label='State' value={formValue.state}/>                  
                    <CustomDetails label='Postcode' value={formValue.postCode || 'N/A'}/>                   
                  </Grid>
                </Grid>
                {/* description details */}
                <Grid
                  container
                  item
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid
                    container
                    item
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                  >
                    <Heading>Description information</Heading>
                  </Grid>
                  <Grid container item direction="row"
                    justify="flex-start"
                    alignItems="center">                    
                      <CustomDetails label="Descriptiont" value={formValue.description}/>         
                  </Grid>
 
                </Grid>
      </ContentWrapper>
    </OutterWrapper>
  </Modal>
)}

export default SaveModal;