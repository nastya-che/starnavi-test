import React, {Component} from 'react';
import MapItem from "./MapItem";
import axios from 'axios';

class TestApiComponent extends Component{

    constructor(){
        super();
        this.state = {
            itemsArr: []
        }
    }

    componentDidMount(){
        axios.get('http://demo4452328.mockable.io/templates')
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


        for(let i = 0; i < itemsArr.length; i++){
            items.push(
                <MapItem
                    key={`item-${i}`}
                    index={i}
                    itemData={itemsArr[i]}
                />
            )
        }

        return(
            <section className={'test-api-sec'}>
                {items}
            </section>
        )
    }
}

export default TestApiComponent;