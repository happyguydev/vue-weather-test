<template>
  <div v-if="exist" class="board">
    <div class="board__current">
      <img class="board__content_img" :src="require('../assets/icons/' + currentData.icon + '.svg')"  v-bind:alt="currentData.icon + ' Icon'">
      <div>
        <h1>Barcelona, Spain</h1>
        <p>{{ currentData.temp }}º</p>
        <p>Humidity: {{ currentData.humidity }}%</p>
        <p>UVI: {{ currentData.uvi }}</p>
        <p>Wind: {{ currentData.windDeg }} {{ currentData.windSpeed }}kmh</p>
      </div>
    </div>
    <div class="board__list">
      <WeatherItem class="board__item" v-for="(item, index) in dailyData" :key="index" :data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import WeatherDataService from '@/services/WeatherDataService'
import WeatherCurrent from '@/types/WeatherCurrent'
import WeatherDate from '@/types/WeatherDate'
import WeatherItem from '@/components/WeatherItem.vue'

export default defineComponent({
  name: 'WeatherBoard',
  components: { WeatherItem },
  setup () {
    const currentData = ref<WeatherCurrent>({})
    const dailyData = ref<WeatherDate[]>([])
    const exist = ref(false)

    const fetchData = () => {
      WeatherDataService.getData().then(res => {
        exist.value = true
        currentData.value = new WeatherCurrent(res.data.current)
        dailyData.value = res.data.daily.splice(1, 6).map((item: any) => {
          return new WeatherDate(item)
        })
      }).catch((err: any) => {
        exist.value = false
        alert(err)
        console.log(err)
      })
    }

    onMounted(fetchData)

    return { fetchData, exist, currentData, dailyData }
  }
})
</script>

<style lang="scss">
  @import '../assets/styles/weather-board';
</style>
