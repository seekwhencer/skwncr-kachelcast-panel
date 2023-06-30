import {PanelPlugin} from '@grafana/data';
import {ThePanel} from './components/ThePanel';
import {TheOptions} from './plugin-settings-types'

export const plugin = new PanelPlugin<TheOptions>(ThePanel).setPanelOptions(builder => {
    return builder


        .addNumberInput({
            path: 'svgSize',
            name: 'SVG Icon size in %',
            description: '',
            defaultValue: 100
        })

        .addNumberInput({
            path: 'nightHourStart',
            name: 'Hour where the night starts',
            description: '',
            defaultValue: 19
        })

        .addNumberInput({
            path: 'nightHourEnd',
            name: 'Hour where the night ends',
            description: '',
            defaultValue: 6
        })

        .addBooleanSwitch({
            path: 'showTemperature',
            name: 'Show temperature',
            defaultValue: true,
        })

        .addNumberInput({
            path: 'maxHours',
            name: 'Number of hours in the future',
            defaultValue: 8
        })

        .addTextInput({
            path: 'text',
            name: 'Simple text option',
            description: 'Description of panel option',
            defaultValue: 'Default value of text input option',
        })

        .addBooleanSwitch({
            path: 'showTime',
            name: 'Show time',
            defaultValue: true,
        })

        .addBooleanSwitch({
            path: 'showRain',
            name: 'Show rain',
            defaultValue: true,
        })

        .addNumberInput({
            path: 'showRainOver',
            name: 'Show rain over this value',
            defaultValue: 49
        })

        .addRadio({
            path: 'seriesCountSize',
            defaultValue: 'sm',
            name: 'Series counter size',
            settings: {
                options: [
                    {
                        value: 'sm',
                        label: 'Small',
                    },
                    {
                        value: 'md',
                        label: 'Medium',
                    },
                    {
                        value: 'lg',
                        label: 'Large',
                    },
                ],
            },
            //showIf: config => config.showSeriesCount
        })

        .addNestedOptions({
            path: 'series',
            category: ['Series'],
            build: (builder) => {
                builder
                    .addTextInput({
                        path: 'temperatureMeasurement',
                        name: 'Temperatures (Series 0) Prefix',
                        description: '',
                        defaultValue: 'sensors/forecast/hours',
                    })

                    .addTextInput({
                        path: 'temperatureMeasurementSuffix',
                        name: 'Temperatures (Series 0) Suffix',
                        description: '',
                        defaultValue: 'temp',
                    })
                    .addTextInput({
                        path: 'cloudsMeasurement',
                        name: 'Clouds (Series 1) Prefix',
                        description: '',
                        defaultValue: 'sensors/forecast/hours',
                    })

                    .addTextInput({
                        path: 'cloudsMeasurementSuffix',
                        name: 'Clouds (Series 1) Suffix',
                        description: '',
                        defaultValue: 'clouds',
                    })

                    .addTextInput({
                        path: 'rainMeasurement',
                        name: 'Rain (Series 3) Prefix',
                        description: '',
                        defaultValue: 'sensors/forecast/hours',
                    })
                    .addTextInput({
                        path: 'rainMeasurementSuffix',
                        name: 'Rain (Series 3) Suffix',
                        description: '',
                        defaultValue: 'rain_probability',
                    })
            }
        })

        .addNestedOptions({
            path: 'fillColors',
            category: ['Fill Colors'],
            build: (builder) => {
                builder
                    .addColorPicker({
                        path: 'cloud_0',
                        name: 'Fill color for cloud icon > 0 <',
                        description: '',
                        defaultValue: '#000000'
                    })
                    .addColorPicker({
                        path: 'cloud_1',
                        name: 'Fill color for cloud icon > 1 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_2',
                        name: 'Fill color for cloud icon > 2 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_3',
                        name: 'Fill color for cloud icon > 3 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_4',
                        name: 'Fill color for cloud icon > 4 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_5',
                        name: 'Fill color for cloud icon > 5 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_6',
                        name: 'Fill color for cloud icon > 6 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_7',
                        name: 'Fill color for cloud icon > 7 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_8',
                        name: 'Fill color for cloud icon > 8 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_9',
                        name: 'Fill color for cloud icon > 9 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
            }
        })

        .addNestedOptions({
            path: 'backgroundColors',
            category: ['Background Colors'],
            build: (builder) => {
                builder
                    .addColorPicker({
                        path: 'cloud_0',
                        name: 'Background color for cloud icon > 0 <',
                        description: '',
                        defaultValue: '#000000'
                    })
                    .addColorPicker({
                        path: 'cloud_1',
                        name: 'Background color for cloud icon > 1 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_2',
                        name: 'Background color for cloud icon > 2 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_3',
                        name: 'Background color for cloud icon > 3 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_4',
                        name: 'Background color for cloud icon > 4 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_5',
                        name: 'Background color for cloud icon > 5 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_6',
                        name: 'Background color for cloud icon > 6 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_7',
                        name: 'Background color for cloud icon > 7 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_8',
                        name: 'Background color for cloud icon > 8 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
                    .addColorPicker({
                        path: 'cloud_9',
                        name: 'Background color for cloud icon > 9 <',
                        description: '',
                        defaultValue: '#ffffff'
                    })
            }
        });
});
