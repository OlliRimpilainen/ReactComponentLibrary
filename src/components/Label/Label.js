import React from 'react';
import PropTypes from 'prop-types';

/** label apina */

function Label({htmlFor, label, required}) {
    return (
        <label style={{dispaly: 'block'}} htmlFor={htmlFor}>
        {label} { required && <span style={{color : 'red'}}> *</span>}
        </label>
    )
}

Label.propTypes = {
    /** html id  */
    htmlFor: PropTypes.string.isRequired,

    /** label text */
    label: PropTypes.string.isRequired,

    /** dispaly asterix after label if true */
    required: PropTypes.bool
};

export default Label;