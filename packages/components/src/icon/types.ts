import type { ExtractPropTypes } from 'vue';

export const svgProps = {
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 16,
  },
  spin: {
    type: Boolean,
    default: false,
  },
};

export const iconProps = {
  // icon name
  icon: String,
  // icon color
  color: String,
  // icon size
  size: {
    type: [String, Number],
    default: 16,
  },
  spin: {
    type: Boolean,
    default: false,
  },
  prefix: {
    type: String,
    default: '',
  },
};

export type SVGProps = ExtractPropTypes<typeof svgProps>;
export type IconProps = ExtractPropTypes<typeof iconProps>;
