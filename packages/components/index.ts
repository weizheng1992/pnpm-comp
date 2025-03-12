import components from './src';
export { AButton, AIcon } from './src';
import { App } from 'vue';
import './src/common/common.less';
export default {
  install: (app: App) => {
    components.forEach((c) => app.use(c));
  },
};
