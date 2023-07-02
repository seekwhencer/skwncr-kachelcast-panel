import React from 'react';

import {IconProps} from './Icons/Types';
import {Icons} from "./Icons";

interface SVGIconProps extends IconProps {
    icon: number;
}

export const SVGIcon: React.FC<SVGIconProps> = ({className, icon, night, fill, backgroundColor}) => {
    return (
            <Icons className={className} icon={icon} night={night} fill={fill} backgroundColor={backgroundColor}/>
    );
}
