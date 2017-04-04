import React, { Component } from 'react';

import Item from './Item/index';

class Sidebar extends Component {

    render() {

        const contentsList = ["News", "Blog", "SNS", "Recruit", "aaa", "bbb"];
        let viewList = [];

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