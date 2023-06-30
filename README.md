<!-- This README file is going to be the one displayed on the Grafana.com website for your plugin -->

# Kachelcast

A weather forecast panel plugin for grafana that displays the next 24 hours.

<img src="https://raw.githubusercontent.com/seekwhencer/skwncr-kachelcast-panel/master/docs/screenshots/panel_hours_02.png" alt="" width="100%"/>
<img src="https://raw.githubusercontent.com/seekwhencer/skwncr-kachelcast-panel/master/docs/screenshots/panel_hours_01.png" alt="" width="100%"/>
<img src="https://raw.githubusercontent.com/seekwhencer/skwncr-kachelcast-panel/master/docs/screenshots/panel_options_01.png" alt="" width="300px"/>
<img src="https://raw.githubusercontent.com/seekwhencer/skwncr-kachelcast-panel/master/docs/screenshots/panel_options_02.png" alt="" width="300px"/>
<img src="https://raw.githubusercontent.com/seekwhencer/skwncr-kachelcast-panel/master/docs/screenshots/panel_options_03.png" alt="" width="300px"/>


## Development

... dockerized

- install docker and docker compose
- rename `.env.example` to `.env`
- edit `.env` and add your `GRAFANA_API_KEY`
- run
    ```bash
    docker-compose up
    ```
- fix owner
    ```
    docker exec -it skwncr-kachelcast-panel_frontend /bin/sh -c "chown root:root -R ."
    ```
- sign the private plugin
    ```
    docker exec -it skwncr-kachelcast-panel_frontend /bin/sh -c "npx @grafana/sign-plugin@latest --rootUrls http://localhost:3000"
    ```


## Setup

- The measurement in this case is: `sensors/forecast/hours/?/temp` and the `?` equals the hour in the future (1 - 24). So any hour in the future has an own measurement.

- There are **three** needed series.
    - temperature
    - clouds
    - rain

- To identify the measurements, enter the first part of the measurement name as prefix and the part from behind the hour as suffix.
- The three series:
    ```influxdb
    from(bucket: "home")
    |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
    |> filter(fn: (r) => r._measurement =~ /sensors\/forecast\/hours\/\b([1-9]|1[0-9]|2[0-4])\b\/temp/)
    |> last()
    |> group(columns:[""])
    ``` 

    ```influxdb
    from(bucket: "home")
    |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
    |> filter(fn: (r) => r._measurement =~ /sensors\/forecast\/hours\/\b([1-9]|1[0-9]|2[0-4])\b\/clouds/)
    |> last()
    |> group(columns:[""])
    ```

    ```influxdb
    from(bucket: "home")
    |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
    |> filter(fn: (r) => r._measurement =~ /sensors\/forecast\/hours\/\b([1-9]|1[0-9]|2[0-4])\b\/rain_probability/)
    |> last()
    |> group(columns:[""])
    ```