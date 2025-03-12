import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import icon from '../icon.vue';

// The component to test
describe('test button', () => {
  it('svg icon', () => {
    const wrapper = mount(icon, {
      props: {
        icon: 'dynamic-avatar-1|svg',
      },
    });
    expect(wrapper.html()).toContain('svg');
  });
  it('icon', () => {
    const wrapper = mount(icon, {
      props: {
        icon: 'ion:settings-outline',
      },
    });
    expect(wrapper.find('.app-iconify').exists()).toBeTruthy();
  });
  it('icon color size', () => {
    const wrapper = mount(icon, {
      props: {
        icon: 'ion:settings-outline',
        color: '#000000',
        size: 18,
        spin: true,
        prefix: 'test',
      },
    });
    expect(wrapper.element.getAttribute('style')).toContain(`color: #000000`);
    expect(wrapper.element.getAttribute('style')).toContain(`font-size: 18px`);
    expect(wrapper.find('.app-iconify-spin').exists()).toBeTruthy();
  });
});
