import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import 'normalize.css';
import './css/app.scss';

import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Root from "./clients/r-acc/root";

const styles = {
  root: {
    height: "100%",
    width: "100%",
    margin: "auto",
    fontFamily: ["Nunito Sans", "Roboto", "Helvetica", "Arial", "sans-serif"],
  }
};

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});

class App extends Component {

  render() {
    const {classes} = this.props;

    return (
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Root />
          </div>
        </MuiThemeProvider>
    );
  }

}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
