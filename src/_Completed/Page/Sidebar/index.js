import React, { Component } from 'react';

import Item from './Item/index';

class Sidebar extends Component {

    render() {

        const contentsList = ["News", "Blog", "SNS", "Recruit", "aaa", "bbb"];
        let viewList = [];

        // Todo
        // contentsListの要素数分 viewListに <Item /> を格納してください。
        // このとき <Item title={ contentsListの要素 } key={ contentsListの要素 } /> 
        // という形で、titleとkeyにcontentsListの要素を指定してください。
        // これが何かは次の章で説明します。
        contentsList.map((item, index)=>{
            viewList.push(<Item title={item} key={item} />)
        })


        return (
            <div className="sidebar">
                {viewList}
            </div>
        );
    }
}

export default Sidebar;