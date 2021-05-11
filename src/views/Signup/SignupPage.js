import React,{useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { loadUser,setUser } from '../../actions/auth';
import { Redirect } from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "./SignupLinks";
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

const useStyles = makeStyles(styles);

const Signup = (props) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { setUser,history, loadUser,...rest } = props;
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const {user} =  await auth.createUserWithEmailAndPassword(email,password);
    console.log(user);
    const userReference = await createUserProfileDocument({user});
    if(userReference) {
      //loadUser(user.id);
      setUser(userReference);
      //await createUserProfileDocument(user,{ displayName:newUser.displayName });
      props.history.push('/personalinfo');
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }

  const handleChange = event => {
    const { value } = event.target;
    setEmail(value);
  }
  const handlePassChange = event => {
    const { value } = event.target;
    setPassword(value);
  }

  return (
    <div>
        <Header
        absolute
        color="transparent"
        brand="Dermosolutions"
        rightLinks={<HeaderLinks />}
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
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Sign Up</h4>
                  </CardHeader>
                  <CardBody>
                  {/*<CustomInput
                      labelText="User name..."
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
                      name="displayName"
                      value={username}
                      onChange={e =>  setUsername(e.target.value)}
                    />*/}
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handleChange(event),
                        name:"email",
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      name="email"
                      value={email}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => handlePassChange(event),
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                      name="password"
                      value={password}
                      onChange={e =>  {
                        e.preventDefault();
                        setPassword(e.target.value)}}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={onSubmit}>
                      Sign Up
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

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user)),
    loadUser: (id) => dispatch(loadUser(id))
});
  
export default connect(null,mapDispatchToProps)(Signup);
  