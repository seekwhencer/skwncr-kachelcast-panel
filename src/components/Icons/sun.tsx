import React from 'react';

interface SVGProps {
    night: boolean;
    fill?: string;
    backgroundColor?: string;
}

export const IconSun: React.FC<SVGProps> = ({night, fill, backgroundColor}) => {

    return (
            <svg
                viewBox="-4 -4 40 40"
                xmlns="http://www.w3.org/2000/svg"
                stroke={fill}
                strokeWidth="2"
                strokeLinecap="round"
            >
                <circle fill="none" cx="16" cy="16" r="7"/>
                <line x1="16" y1="3" x2="16" y2="6"/>
                <line x1="6.81" y1="6.81" x2="8.93" y2="8.93"/>
                <line x1="3" y1="16" x2="6" y2="16"/>
                <line x1="6.81" y1="25.19" x2="8.93" y2="23.07"/>
                <line x1="16" y1="29" x2="16" y2="26"/>
                <line x1="25.19" y1="25.19" x2="23.07" y2="23.07"/>
                <line x1="29" y1="16" x2="26" y2="16"/>
                <line x1="25.19" y1="6.81" x2="23.07" y2="8.93"/>
            </svg>
    );
}
