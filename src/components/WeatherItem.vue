<template>
  <div class="item">
    <div class="item__info">
      <p>{{detail.day}}</p>
      <img class="icon" :src="require('../assets/icons/' + detail.icon + '.svg')" v-bind:alt="detail.day">
    </div>
    <div class="item__temp">
      <p class="item__temp_max">{{detail.max}}ºC</p>
      <p class="item__temp_min">{{detail.min}}ºC</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import WeatherDate from '@/types/WeatherDate'

export default defineComponent({
  name: 'WeatherItem',
  props: {
    data: WeatherDate
  },
  setup (props) {
    const detail = reactive<WeatherDate>(props.data)
    return { detail }
  }
})
</script>

<style lang="scss">
  @import '../assets/styles/weather-item';
</style>
