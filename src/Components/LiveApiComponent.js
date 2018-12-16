import React, {Component} from 'react';
import axios from "axios";
import MapItemLive from "./MapItemLive";


class LiveApiComponent extends Component{

    constructor(){
        super();
        this.state = {
            itemsArr: []
        }
    }

    componentDidMount(){
        axios.get('http://demo4452328.mockable.io/properties')
            .then(res => {
                const itemsArr = res.data;
                this.setState({
                    itemsArr: itemsArr
                })
            });
    }

    render(){

        let items = [],
            itemsArr = this.state.itemsArr;

        if (itemsArr.data !== undefined){
            for(let i = 0; i < itemsArr.data.length; i++){
                items.push(
                    <MapItemLive
                        key={`item-${i}`}
                        index={i}
                        itemData={itemsArr.data[i]}
                    />
                )
            }
        }



        return(
            <section className={'live-api-sec'}>
                {items}
            </section>
        )
    }
}

export default LiveApiComponent;