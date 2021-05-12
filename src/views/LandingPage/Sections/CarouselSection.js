import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import ss1 from "assets/img/ss1.jpeg";
import ss2 from "assets/img/ss2.jpeg";
import ss3 from "assets/img/ss3.jpeg";
import ss4 from "assets/img/ss4.jpeg";
import ss5 from "assets/img/ss5.jpeg";
import ss6 from "assets/img/ss6.jpeg";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import styles1 from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);
export default function SectionCarousel() {
  const classes = useStyles();
  const classes1 = useStyles1();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Container maxWidth='sm'>
        <div style={{height:"100px",lineHeight:"100px",textAlign:"center"}}>
            <h2 style={{display:"inline-block", verticalAlign:"middle",lineHeight:"normal"}} className={classes1.title}>Have a look at SnapShots of our mobile app</h2>
            </div>
        </Container>
        <Grid container justify='space-around'>
          <Grid item xs={12} sm={12} md={3}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={ss1} alt="First slide" className="slick-image" width="10%" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={ss2}
                    alt="Second slide"
                    className="slick-image"
                    width="10%"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={ss3} alt="Third slide" className="slick-image"  width="10%" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={ss4} alt="First slide" className="slick-image" width="10%" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={ss5}
                    alt="Second slide"
                    className="slick-image"
                    width="10%"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={ss6} alt="Third slide" className="slick-image"  width="10%" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
