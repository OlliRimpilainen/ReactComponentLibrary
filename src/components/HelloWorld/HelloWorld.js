import React from 'react';
import PropTypes from 'prop-types';

/** lame component */

function HelloWorld({message}) {
    return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
   /** message to dispaly */
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message: 'World'
}

export default HelloWorld;