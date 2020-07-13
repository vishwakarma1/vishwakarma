import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import withWidth from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/core/styles";

const styles = {
    imagesBackground: {
        background: '#fff',
    },
    imageGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: '24px',
        padding: '24px 48px'
    }
};

class Images extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    };

    imageGrid(){
        const {classes, metadata: {images}} = this.props;

        const image_grid = images.map((image, index) => {
            return(
                <div style={{marginBottom: '24px'}}>
                    <img src={image} alt="image new" style={{width: '100%'}}/>
                </div>
            );
        });

        return (
            <div className="image_grid">
                {image_grid}
            </div>
        );
    }

    render() {
        const {classes, metadata: {imagePageName}} = this.props;
        return (
            <div className={classes.imagesBackground}>
                <div style={{padding: '12px 48px'}}>
                    <span className="black_body_big">{imagePageName}</span>
                </div>
                {this.imageGrid()}
            </div>
        );
    }
}

Images.propTypes = {
    metadata: PropTypes.shape({
        imagePageName: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
    }).isRequired,
};

export default withWidth()(withStyles(styles)(Images));
