import React from 'react';
import PropTypes from 'prop-types';

import withWidth from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/core/styles";

import ImagePopup from "./image_with_popup";

const styles = {
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
        const {metadata: {images}} = this.props;

        const image_grid = images.map((image) => {
            return(
                <ImagePopup image={image}/>
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
            <div className="background-white">
                <div style={{padding: '24px 0px', margin: 'auto', width: '200px'}}>
                    <span className="black_title_big">{imagePageName}</span>
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
