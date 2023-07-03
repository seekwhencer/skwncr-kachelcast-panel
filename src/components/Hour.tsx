import React from 'react';
import {PanelData} from "@grafana/data";
import {SVGIcon} from "./SVGIcon";
import {IconRaindrops} from "./Icons/raindrops";
import {hourStyle, iconStyle, timeStyle, tempStyle, rainStyle, rainDropsStyle, cloudValueStyle} from "./HourStyles";

interface HourProps {
    index: number;
    options: any;
    startTime: number;
    temp: number;
    clouds: number;
    rain: number;
    data: PanelData;
}

export const TheHour: React.FC<HourProps> = ({
                                                 index,
                                                 options,
                                                 startTime,
                                                 temp, clouds, rain,
                                                 data
                                             }) => {
    let time, night: boolean, backgroundColor: string;

    const colorsIndex: string = `cloud_${clouds}`;
    const fill = options.fillColors[colorsIndex];
    backgroundColor = options.backgroundColors[colorsIndex];
    options.noBackground ? backgroundColor = 'transparent' : null;
    const t = new Date(new Date(startTime).setHours(new Date(startTime).getHours() + index + 1));
    const h = t.getHours();
    (h >= options.range.nightHourStart && h < 24) || h <= options.range.nightHourEnd ? night = true : night = false;
    time = `${t.getHours()}:${t.getMinutes().toString().padStart(2, '0')}`;

    return (
            <div className={hourStyle(options.range.maxHours, backgroundColor, options.orientation)}>
                <div className={cloudValueStyle()}>{clouds}</div>
                {options.showTemperature ? <div className={tempStyle(fill, options.orientation)}>{temp} °C</div> : null}
                {options.showRainDrops ? rain > options.showRainOver && rain > 50 ?
                        <IconRaindrops className={rainDropsStyle(rain)} fill={fill}
                                       backgroundColor={backgroundColor}/> : null : null}
                {options.showRain ? rain > options.showRainOver ?
                        <div className={rainStyle(fill, backgroundColor, options.orientation)}><span>{rain} %</span>
                        </div> : null : null}
                <SVGIcon className={iconStyle(options.svgSize, options.orientation)} icon={clouds} night={night}
                         fill={fill}
                         backgroundColor={backgroundColor}/>
                {options.showTime ? <div className={timeStyle(fill, options.orientation)}>{time}</div> : null}
            </div>
    );
}
