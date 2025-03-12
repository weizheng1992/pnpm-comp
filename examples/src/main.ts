import { createApp } from 'vue';
import App from './app.vue';
import AUI from '@a-ui/components';

import 'virtual:svg-icons-register';

const app = createApp(App);
app.use(AUI);
app.mount('#app');
