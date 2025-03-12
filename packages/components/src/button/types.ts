import type { ExtractPropTypes, Component } from 'vue';
import { iconPropType } from '@a-ui/utils';

import AIcon from '../icon';

export const ButtonTypes = ['primary', 'success', 'info', 'warning', 'danger', 'text'] as const;

export const ButtonSizes = ['large', 'small'] as const;

export const bProps = {
  type: {
    type: String,
    values: ButtonTypes,
    default: '',
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  icon: String,
  iconPosition: String,
  /**
   * @description determine whether it's loading
   */
  loading: Boolean,
  /**
   * @description customize loading icon component
   */
  loadingIcon: {
    type: String,
    default: 'eos-icons:bubble-loading',
  },
  loadingSize: {
    type: [Number, String],
    default: 20,
  },
  size: {
    type: String,
    values: ButtonSizes,
    default: '',
  },
};

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type BProps = ExtractPropTypes<typeof bProps>;
