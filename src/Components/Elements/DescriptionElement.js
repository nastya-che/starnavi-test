import React, {Component} from 'react';

class DescriptionElement extends Component{

    render(){
        return(
            <div className={'desc-element item-element'}>
                <span>
                    {this.props.itemData}
                </span>
            </div>
        )
    }
}

export default DescriptionElement;