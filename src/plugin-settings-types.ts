type Orientation = 'horizontal' | 'vertical';

interface Range {
    maxHours: number;
    hourStart: number;
    hourEnd: number;
    nightHourStart: number;
    nightHourEnd: number;
}

interface Series {
    temperatureMeasurement: string;
    temperatureMeasurementSuffix: string;
    cloudsMeasurement: string;
    cloudsMeasurementSuffix: string;
    rainMeasurement: string;
    rainMeasurementSuffix: string;
}

export interface TheOptions {
    svgSize: number;
    showTemperature: boolean;
    showTime: boolean;
    showRain: boolean;
    showRainOver: number;
    showRainDrops: boolean;
    range: Range;
    series: Series;
    orientation: Orientation;
}
