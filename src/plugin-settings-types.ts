type SeriesSize = 'sm' | 'md' | 'lg';

export interface TheOptions {
    svgSize: number;
    nightHourStart: number;
    nightHourEnd: number;
    temperatureMeasurement: string;
    cloudsMeasurement: string;
    rainMeasurement: string;
    text: string;
    maxHours: number;
    showTemperature: boolean;
    showTime: boolean;
    showRain: boolean;
    showRainOver: number;
    seriesCountSize: SeriesSize;
}
