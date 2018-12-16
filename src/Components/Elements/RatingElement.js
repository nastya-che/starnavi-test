import React, {Component} from 'react';
import RatingIcon from '@material-ui/icons/StarRate';

class RatingElement extends Component{

    render(){

        return(
            <div className={'rating-element item-element'}>
                <RatingIcon />
                <span>
                    {this.props.itemData}
                </span>
            </div>
        )
    }
}

export default RatingElement;