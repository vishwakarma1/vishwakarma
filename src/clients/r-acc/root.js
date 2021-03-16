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
import ScrollableAnchor from 'react-scrollable-anchor';

import {
    Header, HeaderImage, Images, Theme, Contact, ContactForm
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
                <div className="black_big_text">
                    " CREATE WITH THE HEART, BUILD WITH THE MIND. "
                </div>
                <div className="hide_below_720">
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
                <HeaderImage metadata={data} />
                {this.renderDesign()}
                <ScrollableAnchor id={"portfolio"}>
                    <div>
                        <Images metadata={data} />
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={"contact"}>
                    <div>
                        <ContactForm />
                    </div>
                </ScrollableAnchor>

            </React.Fragment>
        );
    }
}


export default withStyles(styles)(Root);
