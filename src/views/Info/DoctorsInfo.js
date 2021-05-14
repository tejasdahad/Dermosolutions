import React,{useState, useEffect, Fragment} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import 'date-fns';
import Schedule from "@material-ui/icons/Schedule";
import LinearProgressWithLabel from '../../components/LinearProgress/LinearProgress';
// @material-ui/icons
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

const DoctorsInfo = (props) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  const { auth, history, info, setDoctorInfo, setDoctorUser,...rest } = props;
  const [clinicAddress, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualifications] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [registrationNumber, setReg] = useState('');
  const [clinicSince, setCli] = useState('');
  const [appointments, setAppoint] = useState({});
  const [fees, setFees] = useState('');

  const states = {
    clinicAddress: '',
    experience: 'Otto',
    qualfication: '',
    startTime: '',
    endTime: '',
    onlineConsultingFee: '',
    inPersonConsultingFee: '',
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.className += ' was-validated';
    const doctor = {
      clinicAddress,
      experience,
      qualification,
      fees,
      startTime,
      endTime,
      registrationNumber,
      appointments,
    };
    console.log(doctor);
    setDoctorInfo(doctor);
    const data = {
      ...doctor,
      ...info.personalInfo,
      email: auth.user.email,
    };
    console.log(auth.uid);
    setDoctorUser({ data, uid: auth.uid });
    setAddress('');
    setExperience('');
    setQualifications('');
    setStartTime('');
    setEndTime('');
    setCli('');
    setReg('');
    //setProfilePicture('');
    //history.push('/doctor/dashboard');
  };

  const onChange = (e) => {
      const { name, value} = e.target;
      if(name=='clinicAddress'){
          setAddress(value);
      }else if(name=='registration'){
          setReg(value);
      }else if(name=='experience'){
          setExperience(value);
      }else if(name=='qualifications'){
          setQualifications(value);
      }else if(name=='fees'){
        setFees(value);
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
                    <h4>Doctor Information</h4>
                  </CardHeader>
                  <CardBody>
                  <CustomInput
                      labelText="Clinic Address..."
                      id="clinicaddress"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"clinicAddress",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationCity className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="address" value={clinicAddress} onChange={(e) => setAddress(e.target.value)}
                    />
                    <CustomInput
                      labelText="Registration Number..."
                      id="registration"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"registration",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationCity className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="registration" value={registrationNumber} onChange={(e) => setReg(e.target.value)}
                    />
                    <CustomInput
                      labelText="Experience (No. of years)..."
                      id="experience"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"experience",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Schedule className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="experience" value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                    <CustomInput
                      labelText="Qualifications..."
                      id="qualifications"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"qualifications",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Receipt className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="qualifications" value={qualification}
                      onChange={(e) => setQualifications(e.target.value)}
                    />
                    <CustomInput
                      labelText="Consultation Fees..."
                      id="fees"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (e) => onChange(e),
                        name:"fees",
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <MonetizationOn className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="fees" value={fees}
                      onChange={(e) => setFees(e.target.value)}
                    />
                    <TextField
                        id="startTime"
                        label="Opens at"
                        type="time"
                        defaultValue="07:30"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        value={startTime}
                        onChange={e =>  setStartTime(e.target.value)}
                    />
                    <p></p>
                    <TextField
                        id="closeTime"
                        label="Closes at"
                        type="time"
                        defaultValue="20:00"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                        value={endTime}
                        onChange={e =>  setEndTime(e.target.value)}
                    />
                    
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
  