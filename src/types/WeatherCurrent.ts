import {
  windSpeedConverter,
  tempConverter,
  windDegConverter,
  getIconSVG
} from '../helper'

export default class WeatherCurrent {
  temp?: number;
  humidity?: number;
  uvi?: number;
  windSpeed?: number;
  windDeg?: string;
  icon?: string;

  constructor (data?: any) {
    this.temp = tempConverter(data.temp)
    this.humidity = data.humidity
    this.uvi = data.uvi
    this.windSpeed = windSpeedConverter(data.wind_speed)
    this.windDeg = windDegConverter(data.wind_deg)
    this.icon = getIconSVG(data.weather[0].icon, data.weather[0].id)
  }
}
