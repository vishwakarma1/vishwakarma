import React from "react";

import {Helmet} from "react-helmet";
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
// import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

import { withStyles } from '@material-ui/core/styles';

import {
    Header, HeaderImage, Images, Theme
} from "./../../components/common";
import data from "./data";

const styles = (theme) => ({
    footerContainer: {
        maxWidth: 1156,
        margin: 'auto',
        padding: '0 32px',
        color: Theme.colors.battleshipGrey,
    },
    footerDivider: {
        backgroundColor: Theme.colors.coolGrey,
        height: 1,
    },
    footerLinkSaperator: {
        display: "inline-block",
        marginLeft: 8,
        marginRight: 8,
    },
    footerToggleAlign: {
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-end',
            textAlign: 'right',
        }
    },
});

class Root extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{data.name}</title>
                    <link rel="shortcut icon" href={data.favicon} />
                </Helmet>
                <Router>
                    <Switch>
                        <Route path="/portfolio">
                            <Header metadata={data} />
                            <Images metadata={data} />
                        </Route>
                        <Route path="/">
                            <HeaderImage metadata={data} />
                        </Route>
                    </Switch>
                </Router>

            </React.Fragment>
        );
    }
}


export default withStyles(styles)(Root);
