import React from 'react';
import PropTypes from 'prop-types';

import withWidth from "@material-ui/core/withWidth";
import {withStyles} from "@material-ui/core/styles";

const styles = {
};

class Contact extends React.Component {
    constructor() {
        super();
    };

    render() {
        const {classes, metadata: {email, contact_no, address}} = this.props;
        return (
            <div className="background-white black_body" style={{borderTop: '1px solid black', padding: '24px 48px'}}>
                <a href={'mailto:'+ email}>{email}</a>
                <div>{contact_no}</div>
                <div dangerouslySetInnerHTML={{ __html: address }} />
            </div>
        );
    }
}

Contact.propTypes = {
    metadata: PropTypes.shape({
        email: PropTypes.string.isRequired,
        contact_no: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    }).isRequired
};

export default withWidth()(withStyles(styles)(Contact));
