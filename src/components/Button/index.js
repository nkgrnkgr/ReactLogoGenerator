import React, { Component } from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let isActive = this.props.name === this.props.selectedName ? ` button--active` : '';
        return (
            <div
            className={this.props.name + ' button ' + isActive}
            onClick={()=> this.props.handleClick(this.props.name)}>
                {this.props.name}
            </div>
        );
    }
}

export default Button;