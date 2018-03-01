import React from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Error TextBox */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputCSSModules 
            htmlId="example-optional"
            label="First Name"
            name="firstname"
            onChange={() => {}}
            required
            error="First name is required."
            />
        )
    }
}