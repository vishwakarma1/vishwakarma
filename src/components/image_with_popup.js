import React from 'react';
import PropTypes from 'prop-types';

import withWidth from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';

const styles = {
    imageBottom: {marginBottom: '24px'},
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalDiv: {
        maxWidth: '70%',
        maxHeight: '70%'
    }
};

class ImagePopup extends React.Component {
    constructor() {
        super();
        this.state = {
            popupOpen: false,
        };
    };

    togglePopup = (open) => () => {
        this.setState({previewOpen: open});
        console.log(this.state);
    };

    render() {
        const {classes, image} = this.props;
        return (
            <div>
                <div className={classes.imageBottom}>
                    <img src={image} alt="image new" className={"full-width pointer"} onClick={this.togglePopup(true)}/>
                </div>

                <Modal open={this.state.previewOpen} className={classes.modal} onClose={this.togglePopup(false)} closeAfterTransition>
                    <div className={classes.modalDiv}>
                        <img src={image} alt="image new" className={"full-width"}/>
                    </div>
                </Modal>
            </div>
        );
    }
}

ImagePopup.propTypes = {
    image: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles)(ImagePopup));
