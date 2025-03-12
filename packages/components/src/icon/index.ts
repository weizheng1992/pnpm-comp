import Icon from './icon.vue';
import { withInstall } from '@a-ui/utils';
export const AIcon = withInstall(Icon);
export type ButtonInstance = InstanceType<typeof AIcon>;
export * from './types';
export default AIcon;
