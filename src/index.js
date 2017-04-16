// エントリーポイントになるjs
// React + ReactDomを利用する
import React from 'react';
import ReactDom from 'react-dom';

// import PropesState from './_Completed/PropsState/index';
// import LogoGenerator from './_Completed/LogoGenerator/index';

// HTMLのdomに唯一アクセスする箇所
const el = document.getElementById('root')

// htmlの#rootに作成されたDomを描画している
ReactDom.render(
    // <LogoGenerator />,
    // <PropesState defaultValue="Mastodon" />,
    <div>Hello React World</div>,
    el
)