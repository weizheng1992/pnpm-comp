import Button from './button.vue';
import { withInstall } from '@a-ui/utils';
export const AButton = withInstall(Button);
export type ButtonInstance = InstanceType<typeof Button>;
export * from './types';
export default AButton;
