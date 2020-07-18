import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classnames from "classnames";
// import DropItem from "./DropItem";
import Theme from './themes';
// import defaultMetadata from "./../defaultMetadata";


const styles = {
    headerRoot: {
        background: "#fff",
    },
    headerContent: {
        height: 80,
        padding: '24px 48px',
    },
    subGrid: {
        width: "auto",
    },
    menuContainer: {
        width: 200
    },
    menuLinkExpanded: {
        marginLeft: 16,
        marginRight: 16,
    },
};


class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            menuOpen: false,
        };
    };

    toggleMenuDrawer = (open) => () => {
        this.setState({menuOpen: open});
    };

    renderLogoAndTitle() {
        const {classes, metadata} = this.props;
        const {name} = metadata;

        return (
            <React.Fragment>
                <Grid item>
                    <a href="/" className="black_title_big">{name}</a>
                </Grid>
            </React.Fragment>
        );
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
        const {classes, metadata: {mainMenuItems}} = this.props;
        return (
            mainMenuItems.map((menuItem, index) => {
                return(
                    <Grid item key={index} style={{margin: '0px 16px'}}>
                        <a href={menuItem.url} className="black_title_link">{menuItem.name}</a>
                    </Grid>
                );
            })
        );
    }

    renderMenuAndLogin() {
        const {classes} = this.props;
        if (isWidthUp("md", this.props.width)) {
            return this.renderMenu();
        } else {
            const list = this.renderMenuList();
            return (
                <React.Fragment>
                    <IconButton className="pointer" onClick={this.toggleMenuDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={this.state.menuOpen} onClose={this.toggleMenuDrawer(false)}>
                        {list}
                    </Drawer>
                </React.Fragment>
            );
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.headerRoot}>
                <div className={classes.headerContent}>

                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid container className={classes.subGrid}>
                            {this.renderLogoAndTitle()}
                        </Grid>
                        <Grid container className={classes.subGrid} alignItems="center">
                            {this.renderMenuAndLogin()}
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }

}







Header.propTypes = {
    metadata: PropTypes.shape({
        name: PropTypes.string.isRequired,
        mainMenuItems: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
};

export default withWidth()(withStyles(styles)(Header));
