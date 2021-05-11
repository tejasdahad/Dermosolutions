import React,{useState, useEffect, Fragment} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FormControl, Radio, RadioGroup, FormControlLabel, FormLabel, TextField, InputLabel,FormHelperText,Select,MenuItem } from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
import { MDBInput, MDBInputGroup } from 'mdbreact';
import { setPatientInfo, setPatientUser } from '../../actions/info';

import { setPersonalInfo } from '../../actions/info';
import { storage } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { loadUser,setUser } from '../../actions/auth';
import { Redirect } from "react-router-dom";
import 'date-fns';
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import NavPills from "components/NavPills/NavPills.js";
import DateFnsUtils from '@date-io/date-fns';
import SnackbarContent from '../../components/Snackbar/SnackbarContent';
import CustomLinearProgress from '../../components/CustomLinearProgress/CustomLinearProgress';
import LinearProgressWithLabel from '../../components/LinearProgress/LinearProgress';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { setDoctorInfo, setDoctorUser } from '../../actions/info';

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { LocalHospital, LocationCity, MonetizationOn, PersonPinCircleOutlined, PersonPinCircleRounded, Phone, Receipt } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const useStyles1 = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const DoctorsInfo = (props) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  const classes1 = useStyles1();
  const { auth,
    history,
    info,
    setPatientInfo,
    setPatientUser,...rest } = props;
  
    const [allergies, setAllergies] = useState('');
  const [bloodGroup, setBloodGroup] = useState('A+');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [otherDiseases, setOtherDiseases] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const patient = {
      allergies,
      bloodGroup,
      height,
      weight,
      skinTone,
      otherDiseases,
    };

    setPatientInfo(patient);
    const data = {
      ...patient,
      ...info.personalInfo,
      email: auth.user.email,
    };
    console.log(auth.uid);
    setPatientUser({ data, uid: auth.uid });
    setAllergies('');
    setBloodGroup('A+');
    setHeight('');
    setWeight('');
    setSkinTone('');
    setOtherDiseases('');
    history.push('patient/dashboard');
  };
  const onChange = (e) => {
      const { name, value} = e.target;
      if(name=='allergy'){
          setAllergies(value);
      }else if(name=='height'){
          setHeight(value);
      }else if(name=='weight'){
          setWeight(value);
      }else if(name=='Diseases'){
          setOtherDiseases(value);
      }
  }

  return (
    <div>
        <Header
        absolute
        color="transparent"
        brand="Dermosolutions"
        {...rest}
      />
        
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <LinearProgressWithLabel value={66}  />
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Patient Information</h4>
                  </CardHeader>
                  <CardBody>
                  <CustomInput
                      labelText="Allergies..."
                      id="clinicaddress"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"allergy",
                        type: "text"
                    }}
                      name="allergy" value={allergies} onChange={(e) => setAllergies(e.target.value)}
                    />
                    <FormControl className={classes1.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Blood Group</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={bloodGroup}
                        onChange={e =>  setBloodGroup(e.target.value)}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'A+'}>A+</MenuItem>
                        <MenuItem value={'A-'}>A-</MenuItem>
                        <MenuItem value={'B+'}>B+</MenuItem>
                        <MenuItem value={'B-'}>B-</MenuItem>
                        <MenuItem value={'AB+'}>AB+</MenuItem>
                        <MenuItem value={'AB-'}>AB-</MenuItem>
                        <MenuItem value={'O+'}>O+</MenuItem>
                        <MenuItem value={'O-'}>O-</MenuItem>
                        </Select>
                    </FormControl>
                    <CustomInput
                      labelText="Height..."
                      id="height"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"height",
                        type: "text"
                      }}
                      name="height" value={height} onChange={(e) => setHeight(e.target.value)}
                    />
                    <CustomInput
                      labelText="Weight..."
                      id="weight"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"weight",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Schedule className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="weight" value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                    <FormControl className={classes1.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Skin Tone</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={skinTone}
                        onChange={e =>  setSkinTone(e.target.value)}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Dark'}>Dark</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'Fair'}>Fair</MenuItem>
                        </Select>
                    </FormControl>
                    <CustomInput
                      labelText="Other Diseases..."
                      id="diseases"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"Diseases",
                        type: "text",
                      }}
                      name="Diseases" value={otherDiseases}
                      onChange={(e) => setOtherDiseases(e.target.value)}
                    />
                    
                    
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={onSubmit}>
                      Submit
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        
        {//<Footer whiteFont />
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    info: state.info,
    auth: state.auth,
});
  

const mapDispatchToProps = (dispatch) => ({
    setDoctorInfo: (patient) => dispatch(setDoctorInfo(patient)),
    setDoctorUser: (data) => dispatch(setDoctorUser(data)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(DoctorsInfo);
  