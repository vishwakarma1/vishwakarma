import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import withWidth, {isWidthUp} from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const styles = {
    header: {
        position: 'relative'
    },
    headerBackground:{
        width: '100%'
    },
    headerBody: {
        padding: '24px 48px',
        minHeight: '600px',
        position: 'absolute',
        left: '0',
        right: '0',
        zIndex: '99'
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
            menuOpen: false,
        };
    };

    toggleMenuDrawer = (open) => () => {
        this.setState({menuOpen: open});
    };

    renderMenuList() {
        const {classes, metadata: {mainMenuItems}} = this.props;

        const menuItemComponents = mainMenuItems.map((menuItem, index) => {
            return(
                <ListItem key={index}
                          button component="a" href={menuItem.url}>
                    <ListItemText primary={menuItem.name} className="black_title"/>
                </ListItem>
            )
        });
        return (
            <div className={classes.menuContainer}>
                <List>{menuItemComponents}</List>
            </div>
        );
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
                    {MenuItems}
                </Grid>
            </Grid>
        );
    }

    renderMenuGrid() {
        if (isWidthUp("md", this.props.width)) {
            return this.renderMenu();
        } else {
            const list = this.renderMenuList();
            return (
                <React.Fragment>
                    <IconButton className="pointer" onClick={this.toggleMenuDrawer(true)}>
                        <MenuIcon className="white" />
                    </IconButton>
                    <Drawer anchor="right" open={this.state.menuOpen} onClose={this.toggleMenuDrawer(false)}>
                        {list}
                    </Drawer>
                </React.Fragment>
            );
        }
    };

    render() {
        const {classes, metadata: {name, background}} = this.props;
        return (
            <div>
                <div className={classes.headerBody}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid container className={classes.subGrid}>
                            <a href="/index.html" className="white_title_big">{name}</a>
                        </Grid>
                        <Grid container className={classes.subGrid}>
                            {this.renderMenuGrid()}
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.header}>
                    <img src={background} alt={name} className={classes.headerBackground}/>
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
