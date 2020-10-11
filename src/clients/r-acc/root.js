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
    Header, HeaderImage, Images, Theme, Contact
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

    renderDesign = () => {
        const {images} = data;
        return (
            <div style={{margin: '48px 0px'}}>
                <div className="black_title" style={{width: '28%',margin: '48px auto', fontSize: '28px'}}>
                    " CREATE WITH THE HEART, BUILD WITH THE MIND. "
                </div>
                <div>
                    <div style={{display: 'flex', margin: '24px auto', width: '44%'}}>
                        <img src={images[0]}  style={{width: '320px'}}/>
                        <div className="black_title" style={{backgroundColor: 'antiquewhite',padding: '16px',margin: '70px 16px'}}>Immersive storytelling by design</div>
                    </div>
                    <div style={{display: 'flex', margin: '36px auto', width: '44%'}}>
                        <div className="black_title" style={{backgroundColor: 'darkgray',padding: '16px',margin: '70px 0px 70px 48px'}}>We're designing for life</div>
                        <img src={images[1]}  style={{width: '320px'}}/>
                    </div>
                </div>
            </div>
        );
    };


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
                            {this.renderDesign()}
                            <Images metadata={data} />
                            <Contact metadata={data} />
                        </Route>
                    </Switch>
                </Router>

            </React.Fragment>
        );
    }
}


export default withStyles(styles)(Root);
