import React from 'react';
import ImageElement from "../Components/Elements/ImageElement";
import AreaElement from "../Components/Elements/AreaElement";
import PriceElement from "../Components/Elements/PriceElement";
import AddressElement from "../Components/Elements/AddressElement";
import DescriptionElement from '../Components/Elements/DescriptionElement';
import RatingElement from '../Components/Elements/RatingElement';

export function getBlockFunc(blockName, data, childData){
    switch (blockName) {
        case 'IMAGE':
            return <ImageElement itemData={data} childData={childData} />;
        case 'AREA':
            return <AreaElement itemData={data} />;
        case 'PRICE':
            return <PriceElement itemData={data} />;
        case 'ADDRESS':
            return <AddressElement itemData={data} />;
        case 'full_address':
            return <AddressElement itemData={data} />;
        case 'area':
            return <AreaElement itemData={data} />;
        case 'price':
            return <PriceElement itemData={data} />;
        case 'images':
            return <ImageElement itemData={data} />;
        case 'rating':
            return <RatingElement itemData={data} />;
        case 'description':
            return <DescriptionElement itemData={data} />;

    }
}


