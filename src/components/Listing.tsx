import React from 'react';
import {PanelData} from "@grafana/data";
import {TheHour} from "./Hour";

interface ListingProps {
    options: any;
    data: PanelData;
}

export const TheListing: React.FC<ListingProps> = ({options, data}) => {
    let hours = [];

    const temp = transformData(
            options.series.temperatureMeasurement,
            options.series.temperatureMeasurementSuffix,
            data.series[0].fields.filter(f => f.name === '_measurement')[0].values,
            data.series[0].fields.filter(f => f.name === '_value')[0].values
    );
    //console.log(temp);

    const clouds = transformData(
            options.series.cloudsMeasurement,
            options.series.cloudsMeasurementSuffix,
            data.series[1].fields.filter(f => f.name === '_measurement')[0].values,
            data.series[1].fields.filter(f => f.name === '_value')[0].values
    );
    //console.log(clouds);

    const rain = transformData(
            options.series.rainMeasurement,
            options.series.rainMeasurementSuffix,
            data.series[2].fields.filter(f => f.name === '_measurement')[0].values,
            data.series[2].fields.filter(f => f.name === '_value')[0].values
    );

    const startTime = data.series[0].fields.filter(f => f.name === '_time')[0].values.get(0);

    for (let i = 0; i < options.maxHours; i++) {
        hours.push(<TheHour
                index={i}
                options={options}
                startTime={startTime}
                temp={temp[i]}
                clouds={clouds[i]}
                rain={rain[i]}
                data={data}
        />);
    }

    return (
            <>
                {hours}
            </>
    );
};

const transformData = (measurement: string, measurementSuffix: string, measurements: any, values: any) => {
    const data = [];
    let result, index;

    for (let i = 0; i < measurements.length; i++) {
        result = measurements.get(i);
        index = parseInt(result.replace(measurement,'').replace(measurementSuffix,'').replace(/\//g,''), 10) - 1;
        data[index] = values.get(i);
    }
    return data;
}
