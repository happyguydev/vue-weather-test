import { mount } from '@vue/test-utils'
import WeatherItem from '@/components/WeatherItem.vue'

describe('WeatherItem.vue Implementation Test', () => {
  let wrapper:any = null

  it('initializes with correct elements', () => {
    wrapper = mount(WeatherItem, {
      props: {
        data: {
          day: '',
          min: 0.0,
          max: 0.0,
          icon: '10d'
        }
      }
    })
    expect(wrapper.vm.$options.name).toMatch('WeatherItem')
    expect(wrapper.findAll('img').length).toEqual(1)
    expect(wrapper.findAll('p').length).toEqual(3)
    expect(wrapper.findAll('p')[0].text()).toMatch('')
    expect(wrapper.findAll('p')[1].text()).toMatch('ºC')
    expect(wrapper.findAll('p')[2].text()).toMatch('ºC')
  })

  it('processes valid props data', async () => {
    wrapper = mount(WeatherItem, {
      props: {
        data: {
          day: 'Sunday',
          min: 28,
          max: 30,
          icon: '10n'
        }
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.data.day).toMatch('Sunday')
    expect(wrapper.vm.data.min).toEqual(28)
    expect(wrapper.vm.data.max).toEqual(30)
    expect(wrapper.vm.data.icon).toMatch('10n')

    expect(wrapper.findAll('img').length).toEqual(1)
    expect(wrapper.findAll('p').length).toEqual(3)
    expect(wrapper.findAll('p')[0].text()).toMatch('Sunday')
    expect(wrapper.findAll('p')[1].text()).toMatch('30ºC')
    expect(wrapper.findAll('p')[2].text()).toMatch('28ºC')
  })
})
