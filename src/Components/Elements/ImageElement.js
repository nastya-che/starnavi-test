import React, {Component} from 'react';
import phImg from '../../assets/img/house-placeholder.png';
import {getBlockFunc} from "../../DataController/DataController";

class ImageElement extends Component{

    render(){

        let childEls = [],
            p = this.props,
            child = p.childData;

        if (child){
            for(let i = 0; i < child.length; i++){
                let item = child[i];
                childEls.push(getBlockFunc(item.component, item.field));
            }
        }


        let imgUrl = p.itemData === 'images' ? `url(${phImg})` : `url(${p.itemData[0]})`;

        return(
            <div className={'image-element'}
                 style={{
                     background: imgUrl + '50% 50% no-repeat',
                     backgroundSize: 'cover'
                 }}
            >
                {childEls}
            </div>
        )
    }
}


export default ImageElement;