import React, { Component } from 'react';

class HelloWorld extends Component {

    // 描画処理
    render() {

        // return() の中に1つだけDOMオブジェクトを記載できる（子どもはいくらでも書ける）
        // ２つ書くとエラー
        return (
            // htmlと違うのは 以下２つ
            // class => className
            // for => htmlFor
            <div className="main">
                <h1 style={{ color: 'tomato' }}>Hello World</h1>
            </div>
        );
    }
}

// デフォルトでHelloWorldというクラスをexportする
export default HelloWorld;