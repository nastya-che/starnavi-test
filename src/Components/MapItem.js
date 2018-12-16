import React, {Component} from 'react';
import {getBlockFunc} from "../DataController/DataController";


class MapItem extends Component{

    render(){

        let p = this.props;
        let newTemplate = [];

        for(let i = 0; i < p.itemData.template.length; i++){
            let item = p.itemData.template[i];
            newTemplate.push(getBlockFunc(item.component, item.field, item.children));
        }


        return(
            <div className={'map-item'}>
                <div className={'map-item-wrapper'}>
                    {newTemplate}
                </div>
            </div>
        )
    }
}

export default MapItem;