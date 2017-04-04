import React, { Component } from 'react';

class PropsState extends Component {

    // いわゆるコンストラクター
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.defaultValue,
            count: 0
        }
        // Reactがイベントのハンドラーをthisで呼び出すときに undefinedになるため以下の記載が必要
        this._setValue = this._setValue.bind(this);
    }

    // イベントハンドラー
    // 入力フィールドの値をstateに設定する
    _setValue(e) {
        this.setState({
            text: e.target.value,
            count: e.target.value.length,
        })
    }

    render() {
        
        // JSX内で直接スタイルを適応したい場合
        const textAreaStyle = {
            height: '24px',
        }

        // 描画処理
        return (
            <div className="main">
                <h1>Props State Counter</h1>
                <input type="textarea" style={textAreaStyle} value={this.state.text} onChange={this._setValue}/>
                <span> 文字数 : {this.state.count} </span>
                <p>result: {this.state.text}</p>
            </div>
        );
    }
}

export default PropsState;