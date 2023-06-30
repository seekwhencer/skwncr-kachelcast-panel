import React from 'react';

interface SVGProps {
    night: boolean;
    fill?: string;
    backgroundColor?: string;
}

export const IconCloudy: React.FC<SVGProps> = ({night, fill, backgroundColor}) => {
    return (
            <svg
                    viewBox="-8 -8 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke={fill}
                    fill="transparent"
                    strokeWidth="2"
                    strokeLinecap="round"
            >
                <path d="M22.42,15c-3.13,0-5.74,2.16-6.41,5.06h0c-2.21,0-4.02,1.79-4.02,3.97S13.81,28,16.02,28h6.4 c3.63,0,6.58-2.91,6.58-6.5S26.06,15,22.42,15z"/>
                <path d="M27.71,17.64C28.53,16.29,29,14.7,29,13c0-4.97-4.03-9-9-9c-4.28,0-7.86,2.99-8.77,7H10.5	C7.48,11,5,13.47,5,16.5S7.48,22,10.5,22H12"/>
            </svg>
    );
}
