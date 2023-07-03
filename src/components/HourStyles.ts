import {css, CSSObject} from '@emotion/css';

/**
 *
 * @param maxHours
 * @param backgroundColor
 * @param orientation
 */
const hour = (maxHours: number, backgroundColor: string, orientation: string) => {
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

/**
 *
 * @param svgSize
 * @param orientation
 */
const icon = (svgSize: number, orientation: string) => {
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
};

/**
 *
 * @param fill
 * @param orientation
 */
const temp = (fill: string, orientation: string) => {
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
};

/**
 *
 * @param fill
 * @param orientation
 */
const time = (fill: string, orientation: string) => {
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
};

/**
 *
 * @param fill
 * @param backgroundColor
 * @param orientation
 */
const rain = (fill: string, backgroundColor: string, orientation: string) => {
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
};

/**
 *
 * @param scale
 */
const rainDrops = (scale: number) => {
    return css({
        zIndex: 10,
        position: 'absolute',
        bottom: '-5px',
        width: '70px',
        left: '-15px',
        transform: `scale(${scale / 100})`
    });
};

/**
 *
 */
const cloudValue = () => {
    return css({
        opacity: 0.1,
        position: 'absolute',
        top: 0,
        right: 0,
        padding: '2px',
        backgroundColor: 'rgba(0,0,0,0.1)'
    });
};

export {
    hour,
    icon,
    temp,
    time,
    rain,
    rainDrops,
    cloudValue
};
