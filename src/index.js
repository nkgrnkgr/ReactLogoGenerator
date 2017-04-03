// エントリーポイントになるjs
// React + ReactDomを利用する
import React from 'react';
import ReactDom from 'react-dom';

// HTMLのdomに唯一アクセスする箇所
const el = document.getElementById('root')

// htmlの#rootに作成されたDomを描画している
ReactDom.render(
    // ミニマムHello HelloWorld
    <h1>Hello World</h1>,
    el
)