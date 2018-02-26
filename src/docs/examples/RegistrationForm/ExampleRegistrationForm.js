import React from 'react';
import RegistrationFrom from 'ps-react/RegistrationForm';

export default class ExampleRegistrationFrom extends React.Component {
    onSubmit = (user) => {
        console.log(user);
    }

    render() {
        return <RegistrationFrom onSubmit={this.onSubmit} />
    }
}