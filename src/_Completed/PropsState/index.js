import React, { Component } from 'react';

class PropsState extends Component {

    constructor(props) {
        super(props);
        this.state = {

            // Todo3
            // textの値を "" => this.props.defaultValue に変更してください。
            // countの値を 0 =>　this.props.defaultValue.length に変更してください。

            text: this.props.defaultValue,
            count: this.props.defaultValue.length,
        }
        // Reactがイベントのハンドラーをthisで呼び出すときに undefinedになるため以下の記載が必要
        this._setValue = this._setValue.bind(this);
    }

    // イベントハンドラー
    // textarea の onChangeメソッド が発火した時に実行されます。
    _setValue(e) {

        // Todo4
        // text, countに textarea の入力文字列と count の入力文字列数を入れてください。
        // textareaの入力文字列は e.target.value
        // textareaの入力文字列数は e.target.value.length
        // で取得できます。
        this.setState({
            text: e.target.value,
            count: e.target.value.length,
        })
    }

    render() {
        
        // JSX内で適応させるスタイル
        const textAreaStyle = {
            height: '24px',
        }

        // Todo1
        // textarea の style に textAreaStyle を適応させてください。(ヒント：style={xxxxx})
        // textarea の value に this.state.text を適応させてください (ヒント：value={xxxxxx})
        // textarea の onChange に this._setValue を適応させてください (ヒント：onChange={xxxxxx})

        // Todo2
        // "文字数：" の後ろに this.state.count を出力してください。
        // "result：" の後ろに this.state.text を出力してください。

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