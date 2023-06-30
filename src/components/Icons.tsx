import React from 'react';

/**
 * fill here the icon stack
 *
 */

import {IconSun} from './Icons/sun';
import {IconSunCloudy} from './Icons/sun-cloudy';
import {IconCloudy} from './Icons/cloudy';
import {IconCloudyRain} from './Icons/cloudy-rain';
import {IconCloudyRaindrops} from './Icons/cloudy-raindrops';
import {IconCloudySun} from './Icons/cloudy-sun';

interface IconProps {
    icon: number;
    night: boolean;
    fill?: string;
    backgroundColor?: string;
}

export const Icons: React.FC<IconProps> = ({icon, night, fill, backgroundColor}) => {

    const icons = [
        <IconSun key="0" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconSunCloudy key="1" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudySun key="2" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudy key="3" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudyRaindrops key="4" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudyRaindrops key="5" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudy key="6" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudyRain key="7" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudyRain key="8" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudyRain key="9" night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconSun key="10" night={night} fill={fill} backgroundColor={backgroundColor}/>
    ];

    return (
        <>{icons[icon]}</>
    );
}
