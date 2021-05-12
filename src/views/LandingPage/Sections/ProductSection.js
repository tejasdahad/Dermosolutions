import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Lock } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
          DermoSolutions is a platform for detecting skin diseases using artificial intelligence. 
          The patient can easily upload the pic of the infected area and the platform will predict the disease and also the severity. 
          Based on the severity of the disease, the patient can get assistance from nearby doctors through the platform. 
          There is a facility for booking an appointment with a particular doctor.  
          Before booking an appointment, the patient needs to provide a detailed history of the disease which will be securely placed on the blockchain. So, through this, the doctor will get detailed information about the patient, and a detailed history which will act as a guide for better treatment.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Locate and book appointment"
              description="Easily find dermatologists in your area and easily book appointment. Automatic report forwarding available."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Doctors"
              description="The doctors on the platform are verified using their registration numbers. No need to worry, feel free to consult."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Secure storage"
              description="We are using blokchain for storing patient history, providing extra security. These records can only be accessed by patient and only allocated doctor."
              icon={Lock}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
