import React,{useState, useEffect, Fragment} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
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

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { LocalHospital, LocationCity, PersonPinCircleOutlined, PersonPinCircleRounded, Phone } from "@material-ui/icons";

const useStyles = makeStyles(styles);


var role = 'Doctor';
export const setActivePill = (index) => {
    if(index==0){
        role='Doctor';
    }else if(index==1){
        role='Patient';
    }
    console.log(role);
}
const PersonalInfo = (props) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  const { history, setPersonalInfo,...rest } = props;
  const [toggler,setToggler] = useState(false);
  const [dob, setDOB] = useState(new Date('2014-08-18T21:11:54'));
  const [phoneNumber, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('Male');
  const [error,setError] = useState('');
  const [name,setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  const onSubmit = (e) => {
    e.preventDefault();
    const personal = {
      dateOfBirth:dob,
      phoneNumber,
      city,
      gender,
      name,
      profilePic:imageAsUrl.imgUrl
    };
    setToggler(true);
    setPersonalInfo(personal);
    setDOB('');
    setGender('Male');
    setCity('');
    setImageAsFile('');
    setImageAsUrl('');
  };

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
  }

  const handleFireBaseUpload = e => {
    e.preventDefault()
    console.log('start of upload')
    // async magic goes here...
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
      .then(fireBaseUrl => {
        setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
      })
    })
  }

  const onRoleSubmit = (e) => {
    e.preventDefault();
    var index = localStorage.getItem('active');
    localStorage.removeItem('active');
    if(index==0){
      history.push('/patientsinfo');
    } else if(index==1) {
      history.push('/doctorsinfo');
    } else {
      setTimeout(setError('Please define role'),2000);
      setError('');
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
        {error && <SnackbarContent message={error} color="danger" close={true} />}
        
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {!toggler && <Fragment><LinearProgressWithLabel value={0}  />
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Personal Information</h4>
                  </CardHeader>
                  <CardBody>
                  <CustomInput
                      labelText="Name..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="name" value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <CustomInput
                      labelText="Phone Number..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="phone" value={phoneNumber}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <CustomInput
                      labelText="City..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationCity className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="city" value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="gender" name="gender1" value={gender} onChange={e => setGender(e.target.value)}>
                            <FormControlLabel value="female" control={<Radio />} label="Female"  />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other"  />
                        </RadioGroup>
                    </FormControl>
                    {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={dob}
                    onChange={date =>  setDOB(date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>*/}
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
        </div></Fragment>}
        {toggler && <Fragment><LinearProgressWithLabel value={33}  />
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={1}></GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Define your role</h4>
                  </CardHeader>
                  <CardBody>
                    <NavPills
                        color="primary"
                        tabs={[
                            {
                            tabButton: "Doctor",
                            tabIcon: LocalHospital,
                            tabContent: (null)
                            },
                            {
                            tabButton: "Patient",
                            tabIcon: PersonPinCircleRounded,
                            tabContent: (
                                null)
                            }
                        ]}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={onRoleSubmit}>
                      Submit
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div></Fragment>}
        
        {//<Footer whiteFont />
        }
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    setPersonalInfo: (personal) => dispatch(setPersonalInfo(personal))
});
    
export default connect(null,mapDispatchToProps)(PersonalInfo);
