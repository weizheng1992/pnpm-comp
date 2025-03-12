import { describe, expect, it, test } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';

const AXIOM = 'Rem is the best girl';
// The component to test
describe('test button', () => {
  test('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: AXIOM,
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toEqual(AXIOM);
  });

  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('a-button--primary');
  });

  it('loading', () => {
    const wrapper = mount(button, {
      props: {
        loading: true,
      },
    });

    expect(wrapper.classes()).toContain('is-loading');
  });
  it('round', () => {
    const wrapper = mount(button, {
      props: {
        round: true,
      },
    });

    expect(wrapper.classes()).toContain('is-round');
  });
  it('plain', () => {
    const wrapper = mount(button, {
      props: {
        plain: true,
      },
    });

    expect(wrapper.classes()).toContain('is-plain');
  });

  it('icon', () => {
    const wrapper = mount(button, {
      props: {
        icon: 'dynamic-avatar-1|svg',
      },
    });

    expect(wrapper.find('.anticon').exists()).toBeTruthy();
  });

  it('loading slot', () => {
    const wrapper = mount(button, {
      props: {
        loading: true,
      },
      slots: {
        loading: '<div>loading</div>',
      },
    });

    expect(wrapper.html()).toContain('<div>loading</div>');
  });

  it('icon slot', () => {
    const wrapper = mount(button, {
      slots: {
        icon: '<div>icon</div>',
      },
    });

    expect(wrapper.html()).toContain('<div>icon</div>');
  });

  test('handle click', async () => {
    const wrapper = mount(button, {
      slots: {
        default: AXIOM,
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeDefined();
  });
});
