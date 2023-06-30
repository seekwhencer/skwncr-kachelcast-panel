import React from 'react';
import {Icons} from "./Icons";

interface SVGIconProps {
    icon: number;
    night: boolean;
    fill?: string;
    backgroundColor?: string;
}

export const SVGIcon: React.FC<SVGIconProps> = ({icon, night, fill, backgroundColor}) => {
    return (
            <Icons icon={icon} night={night} fill={fill} backgroundColor={backgroundColor}/>
    );
}
