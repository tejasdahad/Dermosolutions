import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import Signin from '../views/LoginPage/LoginPage';
// import Spinner from './components/layout/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './sign-up/Signup';
// import Userinfo from './user-info/Userinfo';
// import PrivateRouter from './routers/PrivateRoute';
// import PublicRouter from './routers/PublicRoute';
// import ImageTest from './components/layout/Test';
import { auth, createUserProfileDocument } from './firebase/firebase';
// import DashboardPatient from './components/layout/DashboardPatient';
import { loadUser, setUser } from './actions/auth';
// import PersonalInfo from './components/info/PersonalInfo';
// import DoctorsInfo from './components/info/DoctorsInfo';
// import PatientsInfo from './components/info/PatientsInfo';
// import Navbar from './shared/Navbar';
// import DoctorSearch from './components/consult/DoctorSearch';
// import DoctorConsult from './components/consult/DoctorConsult';
// import DashboardDoctor from './components/layout/DashboardDoctor';
// import ViewReport from './components/doctorside/ViewReport';
// import Questionaire from './components/consult/Questionaire';
// import OnlineConsult from './components/consult/OnlineConsult';
// import DoctorAppBook from './components/consult/DoctorAppBook';
//const history = createBrowserHistory();
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignupPage from "views/Signup/SignupPage";
import PersonalInfo from 'views/Info/PersonalInfo';

import { createBrowserHistory } from "history";

var hist = createBrowserHistory();
const store = configureStore();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setAuth] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //console.log(userAuth);
        console.log(userAuth);
        //loadUser(userAuth.uid);

        const user = await createUserProfileDocument(userAuth);
        //setUser(user);
        setCurrentUser(user);
        console.log(currentUser);
      }
      setCurrentUser(userAuth);
    });
  }, []);

  /*
useEffect(() => {
  auth.onAuthStateChanged( async userAuth => {
    if(userAuth) {
      //console.log(userAuth);
      console.log(userAuth.uid);
      loadUser(userAuth);
      const user = await createUserProfileDocument(userAuth);
        user.onSnapshot((snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
          });
        });
    }
  })
},[]);
*/
  return (
    <Provider store={store}>
      <div className='App'>
        <Router history={hist}>
          <Switch>
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/profile-page" component={ProfilePage} />
            <Route exact path="/" component={LoginPage} />
            <Route path="/sign-up" component={SignupPage} />
            <Route path="/components" component={Components} />
            <Route path="/personalinfo" component={PersonalInfo} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};
auth.onAuthStateChanged(async (user) => {
  if (user) {
    store.dispatch(loadUser(user.uid));
    console.log(user);
    const userRefere = await createUserProfileDocument(user);
    console.log(userRefere);
    store.dispatch(setUser(userRefere));
  }
});

export default App;
