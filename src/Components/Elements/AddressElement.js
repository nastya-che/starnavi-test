import React, {Component} from 'react';
import Location from '@material-ui/icons/LocationOnRounded';

class AddressElement extends Component{

    render(){
        return(
            <div className={'address-element item-element'}>
                <Location />
                <span>
                    {this.props.itemData}
                </span>
            </div>
        )
    }
}


export default AddressElement;