import http from '@/http-common'

class WeatherDataService {
  getData (): Promise<any> {
    return http.get(`/data/2.5/onecall?lon=2.159&lat=41.3888&uniots=metric&appid=${process.env.VUE_APP_API_KEY}`)
  }
}

export default new WeatherDataService()
