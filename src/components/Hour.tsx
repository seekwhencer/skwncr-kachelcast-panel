import React from 'react';
import {PanelData} from "@grafana/data";
import {css, CSSObject} from '@emotion/css';
import {SVGIcon} from "./SVGIcon";
import {IconRaindrops} from "./Icons/raindrops";

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

    (h >= options.range.nightHourStart && h < 24) || h <= options.range.nightHourEnd ? night = true : night = false;

    time = `${t.getHours()}:${t.getMinutes().toString().padStart(2, '0')}`;
    const styles = getStyles(options.range.maxHours, options.svgSize, fill, backgroundColor);


    return (
            <div className={hourStyle(options.range.maxHours, backgroundColor, options.orientation)}>
                <div className={styles.cloudNumber}>{clouds}</div>
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

const getStyles = (maxHours: number, svgSize: number, fill: string, backgroundColor: string) => {
    return {
        cloudNumber: css({
            opacity: 0.1,
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '2px',
            backgroundColor: 'rgba(0,0,0,0.1)'
        })
    };
};

const hourStyle = (maxHours: number, backgroundColor: string, orientation: string) => {
    const horizontal: CSSObject = {
        width: `calc(100% / ${maxHours})`,
        height: '100%',
        alignItems: 'center'
    }
    const vertical: CSSObject = {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'flex-start'
    }

    let style: CSSObject = {
        backgroundColor: backgroundColor,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
    };

    if (orientation === 'horizontal') {
        style = {...style, ...horizontal};
    }
    if (orientation === 'vertical') {
        style = {...style, ...vertical};
    }

    return css(style);
};

const iconStyle = (svgSize: number, orientation: string) => {
    const horizontal: CSSObject = {
        marginTop: '-10px',
        width: '100%',
        height: '100%'
    }
    const vertical: CSSObject = {
        order: 2,
        width: '25%'
    }

    let style: CSSObject = {
        filter: `drop-shadow(2px 2px 4px rgba(0,0,0,0.5))`,
        transform: `scale(${svgSize / 100})`
    };

    if (orientation === 'horizontal') {
        style = {...style, ...horizontal};
    }
    if (orientation === 'vertical') {
        style = {...style, ...vertical};
    }

    return css(style);
}

const tempStyle = (fill: string, orientation: string) => {
    const horizontal: CSSObject = {
        position: 'absolute',
        top: '3px',
        width: '100%'
    }
    const vertical: CSSObject = {
        order: 3,
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    let style: CSSObject = {
        textAlign: 'center',
        color: fill
    }

    if (orientation === 'horizontal') {
        style = {...style, ...horizontal};
    }
    if (orientation === 'vertical') {
        style = {...style, ...vertical};
    }

    return css(style);
}

const timeStyle = (fill: string, orientation: string) => {
    let style: CSSObject = {
        color: fill
    };

    const horizontal: CSSObject = {
        position: 'absolute',
        bottom: '3px',
        width: '100%;',
        textAlign: 'center'
    }
    const vertical: CSSObject = {
        order: 1,
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    if (orientation === 'horizontal') {
        style = {...style, ...horizontal};
    }
    if (orientation === 'vertical') {
        style = {...style, ...vertical};
    }

    return css(style);
}

const rainStyle = (fill: string, backgroundColor: string, orientation: string) => {
    const horizontal: CSSObject = {
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        zIndex: 5
    }
    const vertical: CSSObject = {
        order: 4,
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    let style: CSSObject = {
        textAlign: 'center',
        span: {
            color: fill,
            padding: '2px',
            backgroundColor: backgroundColor,
            borderRadius: '3px'
        }
    };

    if (orientation === 'horizontal') {
        style = {...style, ...horizontal};
    }
    if (orientation === 'vertical') {
        style = {...style, ...vertical};
    }

    return css(style);
}

const rainDropsStyle = (scale: number) => {
    return css({
        zIndex: 10,
        position: 'absolute',
        bottom: '-5px',
        width: '70px',
        left: '-15px',
        transform: `scale(${scale / 100})`
    });
};
