
import input from '../src/form-input.vue'
import { mount } from '@vue/test-utils'

describe('form-input', () => {
    test('input-text', () => {
      const wrapper = mount(input)
      expect(wrapper.html()).toContain('input type="text"')
    })
  })



