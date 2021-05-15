/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import {auth} from "../../firebase/firebase";
// @material-ui/icons
import {connect} from 'react-redux';
import { Apps, CloudDownload, AccountCircle, VpnKeyOutlined, VpnKey } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/sign-up"
          color="transparent"
          className={classes.navLink}
        >
          <Link to="/sign-up" style={{color:'white'}}><AccountCircle className={classes.icons} /> Sign Up</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/login"
          color="transparent"
          className={classes.navLink}
        >
          <Link to="/login" style={{color:'white'}}><VpnKey className={classes.icons} />Login</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/logout"
          color="transparent"
          className={classes.navLink}
          onClick={(e) => {
            e.preventDefault();
            auth.signOut();
            window.location.reload(true);
          }}
        >
          <Link to="/logout" style={{color:'white'}}><VpnKey className={classes.icons} />Logout</Link>
        </Button>
      </ListItem>
    </List>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(HeaderLinks);