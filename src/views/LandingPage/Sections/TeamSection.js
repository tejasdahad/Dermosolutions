import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/jinx.jpg";
import team2 from "assets/img/faces/atharva1.png";
import team3 from "assets/img/faces/karan.png";
import team4 from "assets/img/faces/tejas1.png";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ajinkya Brahmankar
                <br />
                <small className={classes.smallTitle}>BlockChain Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href='https://www.linkedin.com/in/ajinkya-brahmankar-b9394a18b/'
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Atharva Saraf
                <br />
                <small className={classes.smallTitle}>Mobile Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href='https://www.linkedin.com/in/atharvasaraf/'
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Karan Kangude
                <br />
                <small className={classes.smallTitle}>Web Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href='https://www.linkedin.com/in/karan-kangude-220a0416b/'
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Tejas Dahad
                <br />
                <small className={classes.smallTitle}>Web Developer</small>
              </h4>
              <CardFooter className={classes.justifyCenter}>
              <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href='https://www.linkedin.com/in/tejas-dahad-b2a492b3/'
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
