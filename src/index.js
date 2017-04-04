// エントリーポイントになるjs
// React + ReactDomを利用する
import React from 'react';
import ReactDom from 'react-dom';

// HTMLのdomに唯一アクセスする箇所
const el = document.getElementById('root')

// htmlの#rootに作成されたDomを描画している
ReactDom.render(
    <div>Hello React World</div>,
    el
)