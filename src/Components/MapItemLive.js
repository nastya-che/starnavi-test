import React, {Component} from 'react';
import {getBlockFunc} from "../DataController/DataController";


class MapItemLive extends Component{

    render(){

        let p = this.props;
        let newTemplate = [];


        for(let key in p.itemData){
            newTemplate.push(getBlockFunc(key, p.itemData[key]));
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

export default MapItemLive;