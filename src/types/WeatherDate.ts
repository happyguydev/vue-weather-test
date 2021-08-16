import {
  getDayFromTimestamp, getIconSVG,
  tempConverter
} from '../helper'

export default class WeatherDate {
  day?: string;
  min?: number;
  max?: number;
  icon?: string;

  constructor (data: any) {
    this.day = getDayFromTimestamp(data.dt).toString()
    this.min = tempConverter(data.temp.min)
    this.max = tempConverter(data.temp.max)
    this.icon = getIconSVG(data.weather[0].icon, data.weather[0].id)
  }
}
