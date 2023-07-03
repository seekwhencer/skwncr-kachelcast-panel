import React from 'react';
import {PanelProps} from "@grafana/data";
import {css, CSSObject} from '@emotion/css';
import {TheListing} from "./Listing";
import {TheOptions} from '../plugin-settings-types'

interface Props extends PanelProps<TheOptions> {
}

export const ThePanel: React.FC<Props> = ({options, data, width, height}) => {
    const styles = getStyles(options.orientation);

    return (
            <div className={styles}>
                <TheListing
                        options={options}
                        data={data}
                />
            </div>
    );
};

const getStyles = (orientation: string) => {
    const horizontal: CSSObject = {
        alignItems: 'center'
    }
    const vertical: CSSObject = {
        flexDirection: 'column',
        flexWrap: 'nowrap'
    }

    let style: CSSObject = {
        display: 'flex',
        width: '100%',
        height: '100%',
    };

    if (orientation === 'horizontal') {
        style = {...style, ...horizontal};
    }
    if (orientation === 'vertical') {
        style = {...style, ...vertical};
    }

    return css(style);
};
