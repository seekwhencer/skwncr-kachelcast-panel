import React from 'react';
import {PanelData} from "@grafana/data";
import {css} from '@emotion/css';
import {SVGIcon} from "./SVGIcon";

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
    let time, night: boolean;

    const colorsIndex: string = `cloud_${clouds}`;
    const fill = options.fillColors[colorsIndex]
    const backgroundColor = options.backgroundColors[colorsIndex];
    const t = new Date(new Date(startTime).setHours(new Date(startTime).getHours() + index + 1));
    const h = t.getHours();

    (h >= options.nightHourStart && h < 24) || h <= options.nightHourEnd? night = true : night = false;

    console.log('NIGHT', h, options.nightHourStart, options.nightHourEnd, night);

    time = `${t.getHours()}:${t.getMinutes().toString().padStart(2, '0')}`;
    const styles = getStyles(options.maxHours, options.svgSize, fill, backgroundColor);

    return (
            <div className={styles.hour}>
                <div className={styles.cloudNumber}>{clouds}</div>
                {options.showTemperature ? <div className={styles.temp}>{temp} °C</div> : null}
                {options.showRain ? rain > options.showRainOver ?
                        <div className={styles.rain}><span>{rain} %</span></div> : null : null}
                <SVGIcon icon={clouds} night={night} fill={fill} backgroundColor={backgroundColor}/>
                {options.showTime ? <div className={styles.time}>{time}</div> : null}
            </div>
    );
}

const getStyles = (maxHours: number, svgSize: number, fill: string, backgroundColor: string) => {
    return {
        hour: css({
            backgroundColor: backgroundColor,
            width: `calc(100% / ${maxHours})`,
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            svg: {
                width: '100%',
                height: '100%',
                filter: `drop-shadow(2px 2px 4px rgba(0,0,0,0.5))`,
                marginTop: '-10px',
                transform: `scale(${svgSize / 100})`
            }
        }),
        temp: css({
            position: 'absolute',
            top: '3px',
            width: '100%',
            textAlign: 'center',
            color: fill
        }),
        time: css({
            position: 'absolute',
            bottom: '3px',
            width: '100%;',
            textAlign: 'center',
            color: fill
        }),
        rain: css({
            position: 'absolute',
            bottom: '20px',
            width: '100%',
            textAlign: 'center',
            zIndex: 1000,
            span: {
                color: fill,
                padding: '2px',
                backgroundColor: backgroundColor,
                borderRadius: '3px'
            }
        }),
        cloudNumber: css({
            opacity: 0.1,
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '2px',
            backgroundColor: 'rgba(0,0,0,0.3)'
        })
    };
};
