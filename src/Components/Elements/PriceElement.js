import React, {Component} from 'react';
import PriceIcon from '@material-ui/icons/MonetizationOnOutlined'

class PriceElement extends Component{

    render(){
        return(
            <div className={'price-element item-element'}>
                <PriceIcon />
                <span>
                    {this.props.itemData}
                </span>
            </div>
        )
    }
}


export default PriceElement;