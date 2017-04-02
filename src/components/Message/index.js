import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="msgfield">
                <p className={this.props.isActive ? 'msg' : ''}>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default Message;