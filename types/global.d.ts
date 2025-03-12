import type { ComponentPublicInstance, FunctionalComponent } from 'vue';

declare global {
  declare function parseInt(s: string | number, radix?: number): number;

  declare module 'vue' {
    export type JSXComponent<Props = any> =
      | { new (): ComponentPublicInstance<Props> }
      | FunctionalComponent<Props>;
  }
}
