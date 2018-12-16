import React, {Component} from 'react';
import Area from '@material-ui/icons/Home'

class AreaElement extends Component{

    render(){
        return(
            <div className={'area-element item-element'}>
                <Area />
                <span>
                    {this.props.itemData}
                </span>
            </div>
        )
    }
}


export default AreaElement;