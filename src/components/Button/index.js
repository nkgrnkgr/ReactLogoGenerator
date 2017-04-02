import React, { Component } from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let isActive = this.props.isActive ? 'button button--active' : 'button'

        return (
            <div
            className={isActive}
            style={{color: this.props.color}}
            onClick={this.props.handleClick}>
                {this.props.name}
            </div>
        );
    }
}

export default Button;