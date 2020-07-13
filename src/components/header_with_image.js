import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import withWidth from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/core/styles";

const styles = {
    header: {
        position: 'relative'
    },
    headerBackground:{
        position: 'absolute',
        width: '100%',
        top: '0'
    },
    headerBody: {
        padding: '24px 48px',
        minHeight: '600px',
        position: 'relative'
    },
    subGrid: {
        width: 'auto',
    },
    menuItem: {
        margin: '0px 16px',
        color: '#fff',
    }
};

class HeaderImage extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    };

    renderMenu(){
        const {classes, metadata: {name, mainMenuItems}} = this.props;

        const MenuItems = mainMenuItems.map((menuItem, index) => {
           return(
               <Grid item key={index} className="white_title_link" style={{margin: '0px 16px'}}>
                   <a href={menuItem.url}>{menuItem.name}</a>
               </Grid>
           );
        });

        return (
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid container className={classes.subGrid}>
                    <a href="/index.html" className="white_title_big">{name}</a>
                </Grid>
                <Grid container className={classes.subGrid}>
                    {MenuItems}
                </Grid>
            </Grid>
        );
    }

    render() {
        const {classes, metadata: {name, background}} = this.props;
        return (
            <div className={classes.header}>
                <img src={background} alt={name} className={classes.headerBackground}/>
                <div className={classes.headerBody}>
                    {this.renderMenu()}
                </div>
            </div>
        );
    }
}

HeaderImage.propTypes = {
    metadata: PropTypes.shape({
        name: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
        mainMenuItems: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
};

export default withWidth()(withStyles(styles)(HeaderImage));
