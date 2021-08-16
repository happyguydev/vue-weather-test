const dayList = [
  ['Sunday', 0],
  ['Monday', 1],
  ['Tuesday', 2],
  ['Wednesday', 3],
  ['Thursday', 4],
  ['Friday', 5],
  ['Saturday', 6]
]

export function getDayFromTimestamp (timestamp: number) {
  const dayNum = new Date(timestamp * 1000).getDay()
  const todayNum = new Date().getDay()

  if (todayNum === dayNum) return 'Today'

  return dayList.filter((item) => item[1] === dayNum)[0][0]
}

export function tempConverter (temp: number) {
  return Math.round(temp - 273.15)
}

export function windSpeedConverter (windSpeed: number) {
  return Math.round(windSpeed * 3600 / 1000)
}

export function windDegConverter (windDeg: number) {
  let res
  if (windDeg === 0) {
    res = 'N'
  } else if (windDeg > 0 && windDeg < 90) {
    res = 'NE'
  } else if (windDeg === 90) {
    res = 'E'
  } else if (windDeg > 90 && windDeg < 180) {
    res = 'EN'
  } else if (windDeg === 180) {
    res = 'S'
  } else if (windDeg > 180 && windDeg < 270) {
    res = 'SW'
  } else if (windDeg === 270) {
    res = 'W'
  } else {
    res = 'NW'
  }

  return res
}

export function getIconSVG (icon: string, id: number) {
  if (
    icon === '03d' ||
    icon === '03n' ||
    icon === '04d' ||
    icon === '04n'
  ) return '03d_03n_04d_04n'

  if (icon === '09d' && id === 521) return '09d-521'

  if (icon === '09d' && id === 531) return '09d-531'

  if (icon === '09d' || icon === '09n') return '09d_09n'

  if (icon === '11d' || icon === '11n') return '11d_11n'

  if (
    icon === '13d' &&
    (
      id === 615 ||
      id === 616 ||
      id === 620 ||
      id === 621 ||
      id === 622
    )
  ) return '13d-615_616_620_621_622'

  if (icon === '13d' || icon === '13n') return '13d_13n'

  if (icon === '50d' && id === 741) return '50d_741'

  if (icon === '50d' || icon === '50n') return '50d_50n'

  //   icon === '01d' ||
  //   icon === '01n' ||
  //   icon === '02d' ||
  //   icon === '02n' ||
  //   icon === '10d' ||
  //   icon === '10n' ||
  //   icon === '01n'

  return icon
}
