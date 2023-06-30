import React from 'react';
import {PanelProps} from "@grafana/data";
import {css} from '@emotion/css';
import {TheListing} from "./Listing";
import {TheOptions} from '../plugin-settings-types'

interface Props extends PanelProps<TheOptions> {
}

export const ThePanel: React.FC<Props> = ({options, data, width, height}) => {
    const styles = getStyles();

    return (
            <div className={styles.listing}>
                <TheListing
                        options={options}
                        data={data}
                />
            </div>
    );
};

const getStyles = () => {
    return {
        listing: css({
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }),
    };
};
