import React from 'react';

/**
 * fill here the icon stack
 * taken from https://erikflowers.github.io/weather-icons/
 *
 * key increments from:
 *
 *               0  'wolkenlos',
 *               1  'leicht bewölkt',
 *               2  'wolkig, stark bewölkt',
 *               3  'bedeckt',
 *               4  'Regenschauer',
 *               5  'Regen',
 *               6  'Nebel',
 *               7  'Gewitter möglich',
 *               8  'starker Regenschauer',
 *               9  'starker Regen',
 */

import {IconProps} from './Icons/Types';

import {IconSun} from './Icons/sun';
import {IconSunCloudy} from './Icons/sun-cloudy';
import {IconCloudy} from './Icons/cloudy';
import {IconCloudySun} from './Icons/cloudy-sun';
import {IconThunderstorm} from "./Icons/thunderstorm";
import {IconFog} from "./Icons/fog";
import {IconRainLight} from "./Icons/rain-light";
import {IconRainMedium} from "./Icons/rain-medium";
import {IconRainHard} from "./Icons/rain-hard";

interface IconsProps extends IconProps {
    icon: number;
}

export const Icons: React.FC<IconsProps> = ({className, icon, night, fill, backgroundColor}) => {

    const icons = [
        <IconSun key="0" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconSunCloudy key="1" className={className}  night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudySun key="2" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconCloudy key="3" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconRainLight key="4" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconRainMedium key="5" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconFog key="6" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconThunderstorm key="7" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconRainHard key="8" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>,
        <IconRainHard key="9" className={className} night={night} fill={fill} backgroundColor={backgroundColor}/>
    ];

    return (
            <>{icons[icon]}</>
    );
}
