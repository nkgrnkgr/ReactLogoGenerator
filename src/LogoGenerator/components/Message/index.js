import React, { Component } from 'react';




/**
 * メッセージクラス
 * 
 * @class Message
 * @extends {Component}
 */
class Message extends Component {
    render() {

        let textClass = `${this.props.fontfamily} ${this.props.textColor}-text`

        return (
            <div className={'msgfield ' + this.props.backgroundColor}>
                <p className={textClass} style={{fontSize: this.props.fontSize}}>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default Message;